// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.thevenueat120.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.thevenueat120.com/","title_tag":"Event venue Greenwich & elegant event space | The Venue at 120","meta_description":"Elegant special events venue and outdoor wedding venue in Greenwich, NY. Perfect for weddings, intimate gatherings and celebrations with timeless charm."},{"page_url":"https://www.thevenueat120.com/blank-page","title_tag":"Weddings Greenwich & corporate meetings | The Venue at 120","meta_description":"Versatile event venue in Greenwich for weddings, corporate meetings and special events. Elegant event space, on-site lodging and bridal salon services."},{"page_url":"https://www.thevenueat120.com/packages","title_tag":"Wedding packages Greenwich & special events | The Venue at 120","meta_description":"Flexible wedding packages in Greenwich, NY for intimate gatherings and large events. Elegant event space, outdoor options and tailored celebrations."},{"page_url":"https://www.thevenueat120.com/blank-page-3","title_tag":"Elegant event space & special events venue | The Venue at 120","meta_description":"View our gallery of weddings, corporate meetings and special events at our elegant event venue in Greenwich, NY with indoor and outdoor spaces."},{"page_url":"https://www.thevenueat120.com/blog","title_tag":"Weddings Greenwich inspiration & tips | The Venue at 120","meta_description":"Discover wedding ideas and planning tips for weddings in Greenwich, NY. Learn about our elegant event space, outdoor wedding venue and special events."},{"page_url":"https://www.thevenueat120.com/faq","title_tag":"Event venue Greenwich FAQ & on-site lodging | The Venue at 120","meta_description":"Find answers about our event venue in Greenwich, NY, including weddings, corporate meetings, special events, on-site lodging and bridal salon services."},{"page_url":"https://www.thevenueat120.com/contact-us","title_tag":"Event venue Greenwich contact & bookings | The Venue at 120","meta_description":"Contact our elegant event venue in Greenwich, NY to plan weddings, corporate meetings and special events. Inquire about on-site lodging and wedding packages."}],"keywords":["Event venue Greenwich","Weddings Greenwich","Corporate meetings Greenwich","Special events venue","On-site lodging Greenwich","Wedding packages Greenwich","Intimate gatherings venue","Elegant event space","Outdoor wedding venue","Bridal salon services"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.thevenueat120.com/#localbusiness",
  "name": "The Venue at 120",
  "description": "The Venue at 120 is an events venue near Saratoga Springs in Greenwich, New York, offering weddings, receptions, social events, galas, corporate meetings and retreats, with on-site Airbnb lodging and a dedicated salon for hair and makeup services.",
  "url": "https://www.thevenueat120.com/",
  "image": [
    "https://static.wixstatic.com/media/26cb5a_f17d650ec0cb454fbb5133522c44592e~mv2.png/v1/fill/w_351,h_281,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/FullLogo.png",
    "https://static.wixstatic.com/media/532f75_c017ac649e4b4b9f8414c1d9d2eb85a4~mv2.jpg/v1/fill/w_460,h_620,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Fiddler%20(37%20of%20198).jpg",
    "https://static.wixstatic.com/media/532f75_76421c6543e04d508d1aa20389a5d427%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/532f75_76421c6543e04d508d1aa20389a5d427%7Emv2.jpg"
  ],
  "telephone": "+1-518-871-3626",
  "email": "mailto:TheVenueAt120@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "124 Fiddlers Elbow Road",
    "addressLocality": "Greenwich",
    "addressRegion": "NY",
    "postalCode": "12834",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.facebook.com",
    "https://www.instagram.com"
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "124 Fiddlers Elbow Road",
      "addressLocality": "Greenwich",
      "addressRegion": "NY",
      "postalCode": "12834",
      "addressCountry": "US"
    }
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Greenwich"
    },
    {
      "@type": "City",
      "name": "Saratoga Springs"
    },
    {
      "@type": "City",
      "name": "Albany"
    }
  ],
  "priceRange": "$$",
  "knowsAbout": [
    "wedding venue",
    "events venue",
    "reception venue",
    "corporate events",
    "social events",
    "baby showers",
    "gala events",
    "on-site Airbnb",
    "bridal salon",
    "event packages"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Small Events Package",
      "description": "Small events package for up to 30 guests, ideal for intimate gatherings such as baby showers, birthdays, and small celebrations.",
      "price": "125.00",
      "priceCurrency": "USD",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "maxValue": 30,
        "unitText": "guests"
      }
    },
    {
      "@type": "Offer",
      "name": "Medium Events Package",
      "description": "Medium events package for 31–65 guests, ideal for showers, corporate events, and special celebrations. Includes tables, chairs, and optional bar area access.",
      "price": "200.00",
      "priceCurrency": "USD",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "minValue": 31,
        "maxValue": 65,
        "unitText": "guests"
      }
    },
    {
      "@type": "Offer",
      "name": "Large Events Package",
      "description": "Large events package for 66–98 guests, designed for bigger gatherings and full-scale celebrations. Includes full use of space, tables, chairs, and bar access.",
      "price": "300.00",
      "priceCurrency": "USD",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "minValue": 66,
        "maxValue": 98,
        "unitText": "guests"
      }
    },
    {
      "@type": "Offer",
      "name": "Wedding Package 2027",
      "description": "Wedding package starting in 2027 at The Venue, including exclusive use of the venue, indoor and veranda seating, cocktail area with waterfront views, two full bars, bridal suite, venue coordinator, setup and breakdown staff, yard games, pergola for photos, and ample flat parking.",
      "price": "6800.00",
      "priceCurrency": "USD"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Event Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Small Events: Up to 30 Guests",
        "description": "$125 per hour (4-hour minimum) for intimate gatherings such as baby showers, birthdays, and small celebrations.",
        "price": "125.00",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Medium Events: 31-65 Guests",
        "description": "$200 per hour (4-hour minimum) for showers, corporate events, and special celebrations, including tables, chairs, and optional bar area access.",
        "price": "200.00",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Large Events: 66-98 Guests",
        "description": "$300 per hour (4-hour minimum) for larger gatherings and full-scale celebrations, including full use of space, tables, chairs, and bar access.",
        "price": "300.00",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Weddings 2027",
        "description": "Wedding events starting at $6,800 with exclusive use of The Venue and a range of included amenities.",
        "price": "6800.00",
        "priceCurrency": "USD"
      }
    ]
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    }
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+1-518-871-3626",
      "email": "TheVenueAt120@gmail.com",
      "areaServed": "US"
    },
    {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+1-518-791-8822",
      "areaServed": "US"
    }
  ],
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.thevenueat120.com/contact-us",
      "inLanguage": "en-US",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    },
    "result": {
      "@type": "Reservation",
      "name": "Event Booking at The Venue at 120"
    }
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
