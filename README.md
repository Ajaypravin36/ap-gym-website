# AP GYM – Premium Commercial Website Demo

A high-converting, luxury fitness multi-page commercial website built for **AP GYM**, designed to communicate **Strength, Discipline, Confidence, and Professionalism**.

---

## 🌟 Key Highlights & Implementation

### 1. Multi-Page Architecture (React Router 6)
- **Home (`/`)**: High-impact cinematic Hero, About Preview with red neon accent, White High-Contrast Services Section, Why Choose Us with athletic physique showcase, Gallery Preview, and Pre-Footer CTA with direct contact info.
- **About Us (`/about`)**: Our Story, Mission, Vision, Facility Highlights, Equipment Standards, and Culture.
- **Services & Coaching (`/services`)**: In-depth presentations of Strength Training, Cardio, 1-on-1 Personal Training, Nutrition Guidance, Weight Training, and Mobility, plus Membership Tiers (Monthly Flex, Quarterly Pro, Annual VIP).
- **Photo Gallery (`/gallery`)**: Curated authentic photography from Unsplash with Category Filters (`All`, `Interior`, `Strength`, `Cardio`, `Training`, `Nutrition`), staggered hover zooms, and a **Full-Screen Interactive Lightbox** (Next, Prev, Keyboard `Esc`/`Arrow` navigation).
- **Contact Us (`/contact`)**: Direct hotline (`+91 93849 70529`), email, hours, and an interactive **Client-Side Validated Enquiry Form** with real-time feedback and success confirmation.
- **Location & Hours (`/location`)**: Complete address, Google Maps embed, "Get Directions" navigation, transit/parking accessibility, and weekly opening hours.

### 2. WhatsApp Integration
- Floating bottom-right WhatsApp button with pulsing beacon animation.
- Direct chat link prefilled to **`+91 93849 70529`**:
  > *"Hello AP GYM, I'm interested in joining your gym. Please share the membership details."*
- Service-specific enquiry buttons that automatically pre-fill the selected program name.

### 3. Visual Identity & Typography
- **Primary Red**: `#E63946`
- **Deep Black**: `#0B0B0B`
- **Charcoal**: `#141414` / `#181818`
- **Pure White**: `#FFFFFF`
- **Secondary Text**: `#A6A6A6`
- **Typography**: Bebas Neue & Oswald for bold athletic headlines; Inter for high-readability body text.

---

## 🚀 Running the Project Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production deployment
npm run build
```

The application runs at: `http://localhost:5173/`

---

## ⚙️ Configuration & Customization

All business details (phone number, email, address, opening hours, WhatsApp messages, images, and membership prices) are centralized in:
📂 `src/data/gymData.js`

To change the phone number or gym details, simply update `GYM_CONFIG` in `src/data/gymData.js`.
