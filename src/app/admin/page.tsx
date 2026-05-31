"use client";

import { useEffect, useState, useCallback } from "react";
import { supabase, supabaseEnabled, type Inquiry } from "@/lib/supabase";
import {
  LogOut,
  RefreshCw,
  Phone,
  Mail,
  MessageCircle,
  Search,
  Filter,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { asset } from "@/lib/paths";

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? "";

const STATUS_CONFIG = {
  new: { label: "New", color: "bg-blue-100 text-blue-800", icon: Clock },
  contacted: { label: "Contacted", color: "bg-yellow-100 text-yellow-800", icon: Phone },
  converted: { label: "Converted", color: "bg-green-100 text-green-800", icon: CheckCircle },
  closed: { label: "Closed", color: "bg-gray-100 text-gray-600", icon: XCircle },
};

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [pwError, setPwError] = useState("");
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [selected, setSelected] = useState<Inquiry | null>(null);
  const [updating, setUpdating] = useState<string | null>(null);

  // Check session on mount
  useEffect(() => {
    if (sessionStorage.getItem("admin_auth") === "true") setAuthed(true);
  }, []);

  const fetchInquiries = useCallback(async () => {
    if (!supabaseEnabled) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const { data, error } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setInquiries(data as Inquiry[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (authed) fetchInquiries();
  }, [authed, fetchInquiries]);

  const login = () => {
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("admin_auth", "true");
      setAuthed(true);
      setPwError("");
    } else {
      setPwError("Incorrect password. Please try again.");
    }
  };

  const logout = () => {
    sessionStorage.removeItem("admin_auth");
    setAuthed(false);
    setPassword("");
  };

  const updateStatus = async (id: string, status: Inquiry["status"]) => {
    setUpdating(id);
    await supabase.from("inquiries").update({ status }).eq("id", id);
    setInquiries((prev) =>
      prev.map((i) => (i.id === id ? { ...i, status } : i))
    );
    if (selected?.id === id) setSelected((prev) => prev ? { ...prev, status } : null);
    setUpdating(null);
  };

  // Stats
  const stats = {
    total: inquiries.length,
    new: inquiries.filter((i) => i.status === "new").length,
    converted: inquiries.filter((i) => i.status === "converted").length,
    services: [...new Set(inquiries.map((i) => i.service))].length,
  };

  // Filtered
  const filtered = inquiries.filter((i) => {
    const matchSearch =
      search === "" ||
      i.name.toLowerCase().includes(search.toLowerCase()) ||
      i.phone.includes(search) ||
      i.service.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "all" || i.status === filterStatus;
    return matchSearch && matchStatus;
  });

  // ─── Login Screen ────────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-2xl shadow p-3 border border-gray-100">
              <Image
                src={asset("/logo.png")}
                alt="Sree Isai"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900 text-center mb-1">
            Admin Panel
          </h1>
          <p className="text-gray-500 text-center text-sm mb-6">
            Sree Isai Electrical Contractor
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && login()}
                placeholder="Enter admin password"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 text-gray-900"
                autoFocus
              />
              {pwError && (
                <p className="text-red-500 text-sm mt-1">{pwError}</p>
              )}
            </div>
            <button
              onClick={login}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-xl transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Dashboard ───────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white px-4 sm:px-6 py-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-xl p-1">
            <Image
              src={asset("/logo.png")}
              alt="Sree Isai"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
          </div>
          <div>
            <p className="font-extrabold text-base leading-tight">Sree Isai</p>
            <p className="text-blue-300 text-xs">Admin Panel</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchInquiries}
            className="flex items-center gap-1.5 bg-blue-800 hover:bg-blue-700 px-3 py-2 rounded-lg text-sm transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
          <button
            onClick={logout}
            className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg text-sm transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Enquiries", value: stats.total, icon: Users, color: "bg-blue-600" },
            { label: "New / Unread", value: stats.new, icon: Clock, color: "bg-yellow-500" },
            { label: "Converted", value: stats.converted, icon: TrendingUp, color: "bg-green-600" },
            { label: "Services Requested", value: stats.services, icon: Zap, color: "bg-purple-600" },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex items-center gap-4">
              <div className={`${color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-gray-900">{value}</p>
                <p className="text-gray-500 text-xs">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, phone or service..."
              className="w-full pl-9 pr-4 py-2.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border-2 border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-blue-500 text-sm bg-white"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="converted">Converted</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>

        {/* Table + Detail panel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Inquiries list */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-bold text-gray-900">
                Enquiries{" "}
                <span className="text-sm text-gray-400 font-normal">
                  ({filtered.length})
                </span>
              </h2>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-16 text-gray-400">
                <RefreshCw className="w-6 h-6 animate-spin mr-2" />
                Loading...
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <Users className="w-10 h-10 mx-auto mb-2 opacity-30" />
                <p>No enquiries found</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-50">
                {filtered.map((inq) => {
                  const StatusIcon = STATUS_CONFIG[inq.status].icon;
                  return (
                    <button
                      key={inq.id}
                      onClick={() => setSelected(inq)}
                      className={`w-full text-left px-5 py-4 hover:bg-blue-50 transition-colors flex items-start gap-3 ${
                        selected?.id === inq.id ? "bg-blue-50 border-l-4 border-blue-600" : ""
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold text-gray-900 truncate">{inq.name}</p>
                          <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${STATUS_CONFIG[inq.status].color}`}>
                            <StatusIcon className="w-3 h-3" />
                            {STATUS_CONFIG[inq.status].label}
                          </span>
                        </div>
                        <p className="text-sm text-blue-600 font-medium">{inq.service}</p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {inq.phone} · {new Date(inq.created_at).toLocaleDateString("en-IN", {
                            day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit"
                          })}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Detail panel */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {selected ? (
              <div className="flex flex-col h-full">
                <div className="px-5 py-4 border-b border-gray-100 bg-blue-50">
                  <h3 className="font-bold text-gray-900">{selected.name}</h3>
                  <p className="text-sm text-blue-600">{selected.service}</p>
                </div>
                <div className="p-5 flex-1 space-y-4">
                  <div className="space-y-3">
                    <a href={`tel:${selected.phone}`} className="flex items-center gap-3 group">
                      <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Phone</p>
                        <p className="font-semibold text-blue-700 group-hover:underline">{selected.phone}</p>
                      </div>
                    </a>
                    {selected.email && (
                      <a href={`mailto:${selected.email}`} className="flex items-center gap-3 group">
                        <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Email</p>
                          <p className="font-semibold text-green-700 group-hover:underline text-sm">{selected.email}</p>
                        </div>
                      </a>
                    )}
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Clock className="w-4 h-4 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Received</p>
                        <p className="font-semibold text-gray-700 text-sm">
                          {new Date(selected.created_at).toLocaleDateString("en-IN", {
                            weekday: "short", day: "numeric", month: "long", year: "numeric",
                          })}
                          <br />
                          <span className="text-gray-500 font-normal">
                            {new Date(selected.created_at).toLocaleTimeString("en-IN", {
                              hour: "2-digit", minute: "2-digit",
                            })}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {selected.message && (
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs text-gray-400 mb-1">Message</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{selected.message}</p>
                    </div>
                  )}

                  {/* Status update */}
                  <div>
                    <p className="text-xs text-gray-400 mb-2">Update Status</p>
                    <div className="grid grid-cols-2 gap-2">
                      {(Object.keys(STATUS_CONFIG) as Inquiry["status"][]).map((s) => (
                        <button
                          key={s}
                          onClick={() => updateStatus(selected.id, s)}
                          disabled={updating === selected.id}
                          className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all border-2 ${
                            selected.status === s
                              ? "border-blue-600 bg-blue-600 text-white"
                              : "border-gray-200 text-gray-600 hover:border-blue-400"
                          }`}
                        >
                          {STATUS_CONFIG[s].label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="space-y-2 pt-2">
                    <a
                      href={`https://wa.me/91${selected.phone.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                    <a
                      href={`tel:${selected.phone}`}
                      className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                <Users className="w-10 h-10 mb-2 opacity-30" />
                <p className="text-sm">Select an enquiry to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
