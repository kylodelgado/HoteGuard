import React, { useState } from "react";
import ROICalculator from "@/components/ROICalculator";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", hotel: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function validate() {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = "Enter a valid email address.";
    if (!form.hotel.trim()) newErrors.hotel = "Hotel name is required.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("idle");
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    // TODO: Integrate with AWS/CRM API endpoint
    // Simulate success for now
    setStatus("success");
    setForm({ name: "", email: "", hotel: "", message: "" });
  }

  return (
    <main className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">Contact & Quote Request</h1>
      
      <section className="bg-blue-50 rounded-xl p-8 shadow-lg mb-8">
        <ROICalculator className="mb-8" />
        
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Get in Touch</h2>
        <p className="text-blue-900 mb-4">Ready to ensure your hotel is fully compliant with the NYC Safe Hotels Act? Contact us for a free compliance consultation, detailed quote, or to schedule a demo. Our team specializes in helping NYC hotels meet all legal requirements and protect their staff.</p>
        <div className="mb-6">
          <h3 className="text-lg font-bold text-blue-900 mb-2">Contact Information</h3>
          <ul className="text-blue-900 text-base space-y-1">
            <li><span className="font-semibold">Address:</span> 464 Bushwick Ave, Brooklyn NY 11206</li>
            <li><span className="font-semibold">Phone:</span> <a href="tel:9298018318" className="underline">(929) 801-8318</a></li>
            <li><span className="font-semibold">Email:</span> <a href="mailto:sales@hotelguard.com" className="underline">sales@hotelguard.com</a></li>
          </ul>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" autoComplete="off" noValidate onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold text-blue-900">Name</label>
            <input id="name" name="name" type="text" required className={`rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.name ? 'border-red-500' : 'border-blue-300'}`} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
            {errors.name && <span id="name-error" className="text-red-600 text-sm">{errors.name}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold text-blue-900">Email</label>
            <input id="email" name="email" type="email" required className={`rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email ? 'border-red-500' : 'border-blue-300'}`} value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
            {errors.email && <span id="email-error" className="text-red-600 text-sm">{errors.email}</span>}
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="hotel" className="font-semibold text-blue-900">Hotel Name</label>
            <input id="hotel" name="hotel" type="text" required className={`rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.hotel ? 'border-red-500' : 'border-blue-300'}`} value={form.hotel} onChange={e => setForm(f => ({ ...f, hotel: e.target.value }))} aria-invalid={!!errors.hotel} aria-describedby={errors.hotel ? 'hotel-error' : undefined} />
            {errors.hotel && <span id="hotel-error" className="text-red-600 text-sm">{errors.hotel}</span>}
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="message" className="font-semibold text-blue-900">Message</label>
            <textarea id="message" name="message" rows={4} required className={`rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.message ? 'border-red-500' : 'border-blue-300'}`} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} placeholder="How can we help?" />
            {errors.message && <span id="message-error" className="text-red-600 text-sm">{errors.message}</span>}
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button type="submit" className="bg-blue-700 text-white font-semibold rounded-lg px-8 py-3 shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all">
              Submit Request
            </button>
          </div>
        </form>
        {status === "success" && <p className="mt-4 text-green-700 text-sm">Thank you! Your request has been submitted.</p>}
        {status === "error" && <p className="mt-4 text-red-700 text-sm">There was an error submitting your request. Please try again.</p>}
        <p className="mt-4 text-blue-800 text-sm">TODO: Integrate with AWS/CRM and add form validation.</p>
      </section>
    </main>
  );
} 