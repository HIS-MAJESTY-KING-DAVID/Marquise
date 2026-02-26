"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare } from "lucide-react";
// import { supabase } from "@/lib/supabase"; // Uncomment when env vars are set

const reservationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(9, "Phone number must be valid"),
  date: z.string().refine((val) => new Date(val) >= new Date(), {
    message: "Date cannot be in the past",
  }),
  time: z.string().min(1, "Please select a time"),
  guests: z.number().min(1, "At least 1 guest required").max(20, "For groups larger than 20, please contact us directly"),
  specialRequests: z.string().optional(),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

export default function ReservationsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      guests: 2,
    },
  });

  const onSubmit = async (data: ReservationFormValues) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // TODO: Connect to Supabase
      // const { error } = await supabase.from('reservations').insert([data]);
      // if (error) throw error;
      
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Reservation Data:", data);
      setIsSuccess(true);
      reset();
    } catch (err) {
      setError("Something went wrong. Please try again or call us directly.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book a Table</h1>
          <p className="text-gray-600">Reserve your spot at La Marquise for an unforgettable dining experience.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {isSuccess ? (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Reservation Confirmed!</h2>
              <p className="text-gray-600 mb-8">
                Thank you for booking with us. We have sent a confirmation email to your inbox.
                We look forward to serving you!
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-12 space-y-6">
              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm mb-6">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Calendar className="h-4 w-4" /> Date
                  </label>
                  <input
                    type="date"
                    {...register("date")}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  />
                  {errors.date && <p className="text-red-500 text-xs">{errors.date.message}</p>}
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Clock className="h-4 w-4" /> Time
                  </label>
                  <select
                    {...register("time")}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select a time</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="13:30">01:30 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="19:00">07:00 PM</option>
                    <option value="19:30">07:30 PM</option>
                    <option value="20:00">08:00 PM</option>
                    <option value="20:30">08:30 PM</option>
                    <option value="21:00">09:00 PM</option>
                  </select>
                  {errors.time && <p className="text-red-500 text-xs">{errors.time.message}</p>}
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Users className="h-4 w-4" /> Guests
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    {...register("guests", { valueAsNumber: true })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  />
                  {errors.guests && <p className="text-red-500 text-xs">{errors.guests.message}</p>}
                </div>
              </div>

              <div className="border-t border-gray-100 my-6 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <User className="h-4 w-4" /> Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      {...register("name")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Phone className="h-4 w-4" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+237 ..."
                      {...register("phone")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Mail className="h-4 w-4" /> Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      {...register("email")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" /> Special Requests (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Allergies, birthday celebration, high chair needed..."
                      {...register("specialRequests")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Confirm Reservation"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
