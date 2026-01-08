# Design & Structure Improvement Plan: May Wood Flooring

## 1. Executive Summary
The current `maywoodflooring-website` uses a modern tech stack (Next.js, Tailwind, MagicUI) with a clean structure. However, compared to top-tier Western (US/EU) flooring suppliers (e.g., Shaw, Kährs, Quick-Step), it lacks key conversion drivers and emotional storytelling elements.

This plan outlines improvements to elevate the brand perception from a "local installer" to a "premium flooring design studio," aligning with international best practices.

## 2. Competitive Analysis (Gap Analysis)

| Feature | Current Site (`maywoodflooring`) | Western Standard (Shaw, Kährs, etc.) | Gap |
| :--- | :--- | :--- | :--- |
| **Hero Section** | Headline + Buttons + Floating Images | Emotional Lifestyle Video/Image + Strong Value Prop | **Moderate**: Current is good, but could be more immersive. |
| **Product Navigation** | Simple Gallery (6 items) | "Shop by Color", "Shop by Look", "Collections" | **Critical**: Needs better categorization. |
| **Interactive Tools** | None | **Room Visualizer** (AR), Cost Calculator | **Critical**: Huge conversion driver missing. |
| **Samples** | Not mentioned | **Free Sample Ordering** (Primary CTA) | **High**: Essential for e-commerce/leads. |
| **Social Proof** | Standard Testimonials | Instagram Feed, Video Reviews, Project Case Studies | **Moderate**: Needs more visual proof. |
| **Trust/Eco** | Badges present | FSC, Cradle-to-Cradle, "Sustainability Story" | **Moderate**: Needs specific eco-messaging. |

## 3. Recommended Site Structure (New Layout)

We propose reordering the landing page to follow a high-converting narrative arc:

1.  **Hero Section** (Enhanced)
    *   *Change*: Use a more immersive background (or larger hero image).
    *   *Add*: Clear CTA for "Order Free Samples" alongside "Visit Showroom".
2.  **Trust Bar** (Refined)
    *   *Content*: "Trusted by Builders", "5-Star Google Reviews", "Eco-Friendly".
3.  **Shop by Category** (New Component)
    *   *Visuals*: Grid of *rooms* (not just planks), labeled by style (e.g., "Modern Oak", "Rustic Hickory", "Herringbone").
4.  **Value Proposition / "Why Choose Us"** (Services)
    *   *Style*: Keep existing, but enhance icons/typography.
5.  **Interactive Visualizer Promo** (New Component)
    *   *Action*: "See these floors in your room instantly."
    *   *CTA*: "Try Room Visualizer".
6.  **Featured Collections / Bestsellers** (Flooring Gallery)
    *   *Refinement*: Highlight specific "Trending" products.
7.  **Social Proof / Project Gallery**
    *   *Style*: Masonry grid of real installations.
8.  **Lead Magnet / Footer CTA**
    *   *Content*: "Get your free floor guide" or "Book a free measure".

## 4. Implementation Plan

### Phase 1: Structural Reordering & New Components
- [ ] **Create `CategoryGrid` component**: A visual grid for "Shop by Style/Color".
- [ ] **Create `VisualizerPromo` component**: A banner inviting users to upload a photo (can link to a 3rd party tool or just a "Coming Soon" modal for now).
- [ ] **Create `SamplePromo` banner**: A dedicated section for "Order 3 Free Samples".

### Phase 2: Design Polish (Quiet Luxury)
- [ ] **Typography**: Ensure headings are elegant (Serif for headings, Sans for body is a common premium pairing).
- [ ] **Spacing**: Increase white space between sections (`py-24` instead of `py-12`).
- [ ] **Imagery**: Replace "floating product" shots with "full room lifestyle" shots where possible.

### Phase 3: Content Enhancement
- [ ] **Eco-Story**: Add a section about sustainability (FSC timber, low VOC).
- [ ] **Process**: Visual timeline of "Measure -> Select -> Install".

## 5. Next Steps for Developer
1.  Run `/start-work` to begin implementation.
2.  Prioritize **Phase 1** (Components).
3.  Focus on adding the **Visualizer CTA** and **Sample Ordering** hooks, as these have the highest ROI.

