import React from "react";

const partners = [
  { name: "Government of Odisha", src: "/lovable-uploads/35b90754-49b0-4a85-bd57-0a840ce27a90.png" },
  { name: "NHAI", src: "/lovable-uploads/293f2420-cde3-4247-ac71-24b23b0b7497.png" },
  { name: "NCC", src: "/lovable-uploads/553180c8-32f9-4046-929c-debc446a5776.png" },
  { name: "ORSAC", src: "/lovable-uploads/120b9fc0-9864-4818-aeea-c06d9801ff72.png" },
  { name: "Department of Science & Technology", src: "/lovable-uploads/e6ab90df-3f43-4bf9-a706-6fce4f2d72cf.png" },
  { name: "Ceragem", src: "/lovable-uploads/03305d73-f536-41a9-b6fc-30c603db4efc.png" },
  { name: "Centurion University", src: "/lovable-uploads/a254dbb9-2bbb-490e-b357-72e83c881891.png" },
];

export default function PartnersMarquee() {
  // Duplicate for seamless loop
  const items = [...partners, ...partners];

  return (
    <section className="py-12 bg-muted/30" aria-label="Our partners">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center">
          <h2 className="text-xl font-semibold tracking-wide">Our Partners</h2>
          <p className="text-sm text-muted-foreground">Trusted by government and enterprise across Odisha</p>
        </div>

        <div className="relative overflow-hidden marquee-gradient-mask">
          <div className="marquee marquee-paused gap-12 items-center">
            {items.map((p, i) => (
              <div key={`${p.name}-${i}`} className="flex items-center justify-center">
                <img
                  src={p.src}
                  alt={`${p.name} logo`}
                  loading="lazy"
                  className="h-14 w-auto mx-8 opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
