# MVP Design Plan: La Marquise Restaurant Website

**Version:** 1.0
**Date:** 2026-02-24
**Based on:** [La_Marquise_Profile.md](La_Marquise_Profile.md)

---

## 1. Executive Summary & Brand Identity

### 1.1 Project Vision
To transform La Marquise's digital presence from a reliance on third-party platforms (Facebook, TripAdvisor) into an owned "Revenue Engine." The website will serve as a premium digital storefront that reflects the restaurant's dual-concept identity (Fast Food & Fine Dining) while streamlining operations through digital reservations and ordering.

### 1.2 Brand Identity
*   **Name:** La Marquise
*   **Location:** Bonapriso, Rue Tokoto, Douala
*   **Vibe:** Sophisticated yet accessible. A fusion of upscale dining and casual comfort.
*   **Cuisine:** International Fusion (French/Italian/Cameroonian) & Premium Fast Food.
*   **Target Audience:** 
    *   *Primary:* Local professionals and expatriates in Bonapriso/Douala seeking quality dining.
    *   *Secondary:* Tourists and visitors looking for top-rated local gastronomy.
*   **Unique Selling Points (USPs):**
    *   Dual atmosphere (Casual Fast Food vs. Chic Fine Dining).
    *   High-quality outdoor seating ambiance.
    *   Strong reputation (#47/204 on TripAdvisor).

---

## 2. Site Architecture (Sitemap)

The site structure is designed to guide users quickly to their goal: Booking a table or Viewing the menu.

1.  **Home (Landing Page)**
    *   Hero Section (Video/High-quality imagery + "Book a Table" CTA).
    *   About Teaser.
    *   Featured Dishes / Specials.
    *   Testimonials (TripAdvisor integration).
    *   Footer (Map, Hours, Socials).
2.  **Menu (Digital & Interactive)**
    *   Tabbed Interface: "Fine Dining" | "Fast Food" | "Drinks".
    *   Search & Filter (e.g., Vegetarian, Spicy).
3.  **Reservations**
    *   Booking Form (Date, Time, Party Size).
    *   Confirmation Page.
4.  **Private Events**
    *   Information on hosting parties/corporate events.
    *   Inquiry Form.
5.  **Gallery**
    *   High-res grid of food, interior, and patio vibes.
6.  **Contact & Location**
    *   Embedded Google Map.
    *   Direct Contact details.
    *   FAQ.

---

## 3. Feature Specifications

### 3.1 Online Reservation System
*   **Functionality:** Users can select date, time, and number of guests.
*   **Integration:** Real-time availability check (MVP: Email/SMS notification to manager; Future: POS integration).
*   **User Flow:** "Book a Table" -> Select Details -> Enter Contact Info -> Confirm -> Receive SMS/Email.

### 3.2 Interactive Menu
*   **Features:**
    *   Categorized sections (Starters, Mains, Desserts, Pizza, Burgers).
    *   **Dietary Filters:** Vegetarian, Vegan, Gluten-Free, Spicy.
    *   High-quality photos for key dishes.
    *   Price display (Mid to High-end range indication).
*   **Mobile-First:** Accordion style for mobile users to minimize scrolling.

### 3.3 Private Events & Catering
*   **Lead Generation:** Dedicated form capturing Event Type, Date, Guest Count, Budget.
*   **Automation:** Auto-reply email with "Private Dining Brochure" (PDF).

### 3.4 QR Code Ordering (In-Restaurant)
*   **Functionality:** Scannable codes on tables link directly to the specific table's ordering interface or digital menu.
*   **Goal:** Reduce waiter wait times and increase table turnover.

### 3.5 Marketing & Social Integration
*   **Instagram/Facebook Feed:** Live feed in the footer or dedicated section.
*   **VIP List:** Pop-up or footer signup for email/SMS marketing (Birthday offers).
*   **Review Widget:** Display latest TripAdvisor reviews to build trust.

---

## 4. Technology Stack & Technical Standards

### 4.1 Core Stack
To ensure speed, SEO, and maintainability:

*   **Frontend Framework:** **Next.js (App Router)** - Excellent for SEO, speed, and static generation.
*   **Styling:** **Tailwind CSS** - For rapid, responsive, and modern styling.
*   **Content Management System (CMS):** **Sanity.io** or **Contentful** - Allows non-technical staff to update menus and photos easily.
*   **Hosting:** **Vercel** - Optimized for Next.js, ensuring high performance and global CDN.
*   **Database (for Reservations/Users):** **Supabase** (PostgreSQL) - Scalable and easy to integrate.
*   **Storage:** **Supabase Storage** - Dedicated buckets for optimized menu images (`menu-items`) and event assets (`events-gallery`) with CDN caching.
*   **Forms/Email:** **Resend** or **SendGrid** for transactional emails (confirmations).
*   **Analytics:** **Google Analytics 4** & **Microsoft Clarity** (heatmaps).

### 4.2 Security Best Practices (Crucial for Data Protection)
*   **Authentication & Authorization:**
    *   **RLS (Row Level Security):** Strict policies on Supabase tables.
        *   *Public Access:* Menu items, Events, Gallery (SELECT only).
        *   *Private Access:* Reservations, User Profiles (SELECT/UPDATE for `auth.uid() = user_id` only).
        *   *Admin Access:* Full CRUD for staff roles.
*   **Input Validation:**
    *   Use **Zod** schema validation for all API inputs (Reservation forms, Contact forms) to prevent injection and bad data.
    *   Sanitize all user inputs on both client and server.
*   **Data Protection:**
    *   Encrypt sensitive customer data (phone numbers, emails) at rest.
    *   Implement security headers: `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`.
*   **Vulnerability Management:**
    *   Regular `npm audit` checks.

### 4.3 Maintainability & Code Quality
*   **Directory Structure:** Follow Next.js App Router conventions (`src/app`, `src/components`, `src/lib`, `src/hooks`).
*   **Component Architecture (Atomic Design):**
    *   Build small, stateless atoms (Buttons, Inputs, Badges) first.
    *   Compose into molecules (MenuCard, ReservationForm) and organisms (Header, Footer).
*   **Type Safety:** Strict TypeScript interfaces for all data models (Menu Item, Reservation, User). No `any` types.
*   **Code Organization:**
    *   **Colocation:** Keep related styles/tests close to components.
    *   **Custom Hooks:** Extract logic (e.g., `useReservation`, `useMenuFilter`) to separate UI from business logic.
    *   **Service Layer:** Abstract API calls into services (e.g., `SupabaseService`) rather than direct `fetch` calls in components.
*   **Version Control:**
    *   **Conventional Commits:** Use standard prefixes (e.g., `feat:`, `fix:`, `chore:`) for clarity.
    *   **Branching Strategy:** Feature branches -> PR -> Main.

### 4.4 PWA & Offline Capability (Restaurant Reliability)
*   **Service Workers:** Implement caching strategies (Stale-While-Revalidate) for:
    *   Menu data (text and prices).
    *   Critical assets (Logo, Fonts, core CSS).
*   **Offline Fallback:**
    *   If offline, show a cached version of the menu and a "Call to Book" button instead of the reservation form.
    *   Ensure the site loads even with spotty connectivity (common in some restaurant corners).
*   **Manifest:** Ensure the site is installable on mobile devices (Add to Home Screen).

---

## 5. User Journey Mapping

### Scenario A: The "Date Night" Planner
1.  **Discovery:** Searches "Best romantic restaurant Bonapriso" -> Finds Website.
2.  **Landing:** Sees video of ambiance. Impressed.
3.  **Action:** Clicks "Menu" -> Filters for "Italian". Checks prices.
4.  **Conversion:** Clicks "Book a Table" -> Selects Friday 8 PM -> Confirms.
5.  **Post-Action:** Receives SMS confirmation.

### Scenario B: The "Lunch Rush" Professional
1.  **Discovery:** Scans QR code at the patio table.
2.  **Landing:** Direct link to "Fast Food / Lunch" Menu.
3.  **Action:** Browses "Burgers". Sees photo of "La Marquise Burger".
4.  **Conversion:** Calls waiter to order specific item (or orders via app if Phase 2 implemented).

---

## 6. Content Strategy

*   **Tone of Voice:** Welcoming, professional, appetizing.
*   **Visuals:** Professional photography is non-negotiable. Focus on lighting and texture.
*   **SEO Keywords:** "Restaurant Bonapriso", "Best Pasta Douala", "Fine Dining Douala", "Events Venue Rue Tokoto".
*   **Localization:** Content available in French (primary) and English (secondary) if needed, given the international clientele.

---

## 7. Performance & Accessibility Standards

### 7.1 Performance Benchmarks (Core Web Vitals)
*   **Largest Contentful Paint (LCP):** < 2.5s
*   **First Input Delay (FID):** < 100ms
*   **Cumulative Layout Shift (CLS):** < 0.1
*   **Mobile Speed Score:** 90+ on Google PageSpeed Insights.

### 7.2 Accessibility (WCAG 2.1 AA)
*   **Color Contrast:** Text vs background ratio of at least 4.5:1.
*   **Alt Text:** All menu images must have descriptive alt text for screen readers.
*   **Keyboard Navigation:** Full site navigable without a mouse.
*   **Font Sizing:** Scalable units (rem/em) for text resizing.

---

## 8. Quality Assurance & Testing Strategy
(Based on WC_Dev_Checklist.md standards)

### 8.1 Testing Levels
*   **Unit Testing (Jest/Vitest):**
    *   Test utility functions (e.g., `calculateTotal`, `formatDate`, `filterMenu`).
    *   Test custom hooks (e.g., `useReservationAvailability`).
*   **Integration Testing (React Testing Library):**
    *   Test the full "Browse Menu -> Filter -> Select Item" flow.
    *   Test the "Book a Table" form submission and validation feedback.
*   **End-to-End (E2E) Testing (Playwright/Cypress):**
    *   Simulate a user booking a table from Landing Page to Confirmation.
    *   Verify Admin Dashboard actions (e.g., approving a reservation).

### 8.2 Cross-Platform & Device QA
*   **Mobile Testing:** Verify touch targets (buttons > 44px) and layout on iOS (Safari) and Android (Chrome).
*   **Tablet Testing:** Ensure the menu grid adapts correctly to iPad/Tablet screens.
*   **Browser Compatibility:** Test on Chrome, Firefox, Safari, and Edge.

### 8.3 Performance Audits
*   **Lighthouse:** Run audits before every major release (Target: >90 Performance, >90 Accessibility).
*   **Bundle Analysis:** Check build size to prevent bloating (keep JS bundle < 200KB initial load).

---

## 9. Phased Development Timeline

### Phase 1: The "Digital Foundation" (Weeks 1-3)
*   **Goal:** Launch informational site & Menu.
*   **Deliverables:**
    *   Home, About, Contact pages.
    *   Digital Menu (Non-interactive initially, just viewable).
    *   Google Maps Integration.
*   **Success Metric:** Site live with < 2s load time.

### Phase 2: The "Conversion Engine" (Weeks 4-6)
*   **Goal:** Enable Bookings & Interactivity.
*   **Deliverables:**
    *   Reservation System (Form + Email Notifications).
    *   Menu Filtering & Search.
    *   Events Inquiry Form.
*   **Success Metric:** 10 online reservations/week.

### Phase 3: Operational Efficiency (Weeks 7-9)
*   **Goal:** In-Store Integration.
*   **Deliverables:**
    *   QR Code generation for tables.
    *   CMS Training for staff (to update Daily Specials).
    *   VIP List / Newsletter setup.
*   **Success Metric:** 20% reduction in menu-related questions for waitstaff.
