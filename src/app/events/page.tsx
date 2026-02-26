"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, Users, Mail, Phone, MessageSquare, PartyPopper, Briefcase, Heart } from "lucide-react";

const eventSchema = z.object({
  eventType: z.string().min(1, "Please select an event type"),
  date: z.string().refine((val) => new Date(val) >= new Date(), {
    message: "Date cannot be in the past",
  }),
  guests: z.number().min(10, "For events smaller than 10 people, please use standard reservations"),
  budget: z.string().optional(),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(9, "Valid phone number required"),
  details: z.string().min(10, "Please provide some details about your event"),
});

type EventFormValues = z.infer<typeof eventSchema>;

export default function EventsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      guests: 20,
    },
  });

  const onSubmit = async (data: EventFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Event Inquiry:", data);
    setIsSuccess(true);
    setIsSubmitting(false);
    reset();
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="relative h-[50vh] flex items-center justify-center bg-gray-900 text-white">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519671482538-518b5c2bf01c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Host Your Event</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, make memories at La Marquise.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Section */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Located in the prestigious Bonapriso neighborhood, La Marquise offers versatile spaces tailored to your needs. Our culinary team will craft a custom menu that delights your guests, blending local flavors with international finesse.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-amber-50 p-6 rounded-xl">
                <PartyPopper className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="font-bold text-xl mb-2">Private Parties</h3>
                <p className="text-sm text-gray-600">Birthdays, Anniversaries, and Reunions.</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-xl">
                <Briefcase className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="font-bold text-xl mb-2">Corporate Events</h3>
                <p className="text-sm text-gray-600">Business dinners, Product launches, and Team building.</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-xl">
                <Heart className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="font-bold text-xl mb-2">Weddings</h3>
                <p className="text-sm text-gray-600">Intimate receptions and rehearsal dinners.</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Inquiry Received</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest. Our events manager will review your request and contact you within 24 hours to discuss the details.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-amber-600 font-semibold hover:text-amber-700"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Tell us about your event</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                    <select
                      {...register("eventType")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                    >
                      <option value="">Select type...</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="wedding">Wedding / Reception</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.eventType && <p className="text-red-500 text-xs mt-1">{errors.eventType.message}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                      <input
                        type="date"
                        {...register("date")}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                      />
                      {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Est. Guests</label>
                      <input
                        type="number"
                        {...register("guests", { valueAsNumber: true })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                      />
                      {errors.guests && <p className="text-red-500 text-xs mt-1">{errors.guests.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. 500,000 - 1,000,000 FCFA"
                      {...register("budget")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name</label>
                    <input
                      type="text"
                      {...register("name")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        {...register("email")}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        {...register("phone")}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us more about your vision..."
                      {...register("details")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none resize-none"
                    />
                    {errors.details && <p className="text-red-500 text-xs mt-1">{errors.details.message}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Request Quote"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
