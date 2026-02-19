export function PricingSection() {
  return (
    <section className="w-full bg-zinc-50 py-20 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 md:px-10 lg:px-16">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Travel Website Packages
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Transparent pricing for growing travel businesses
          </h1>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Choose the package that matches where your agency is today. You can
            always upgrade as your bookings and operations grow.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Starter Package */}
          <article className="relative flex flex-col rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              <span className="text-lg">🥉</span>
              <span>Starter Website Package</span>
            </div>
            <h2 className="text-lg font-semibold">Best for small tour operators</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Professional online presence to showcase your tours.
            </p>

            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                Website Development
              </p>
              <p className="mt-1 text-2xl font-semibold">
                LKR 65,000{" "}
                <span className="align-middle text-xs font-normal text-zinc-500">
                  one-time
                </span>
              </p>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Modern, mobile-friendly 5 page website</li>
              <li>• Tour packages display</li>
              <li>• Booking form connected to Email or WhatsApp</li>
              <li>• Basic Google SEO setup</li>
              <li>• Fast loading and secure</li>
              <li>• Hosting setup included</li>
            </ul>

            <div className="mt-6 border-t border-dashed border-zinc-200 pt-4 dark:border-zinc-800">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                Monthly Maintenance
              </p>
              <p className="mt-1 text-lg font-semibold">LKR 6,000 / month</p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Hosting and security management</li>
                <li>• Update tour packages whenever needed</li>
                <li>• Content changes when needed</li>
                <li>• Monthly backups</li>
              </ul>
            </div>

            <p className="mt-5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
              ✔ Ideal if you just want a professional website and basic online
              visibility.
            </p>
          </article>

          {/* Growth & Booking Package (Recommended) */}
          <article className="relative flex flex-col rounded-3xl border-2 border-emerald-500 bg-white p-6 shadow-xl ring-1 ring-emerald-100 backdrop-blur-sm transition hover:-translate-y-2 dark:border-emerald-400 dark:bg-zinc-950 dark:ring-emerald-900/60 md:-mt-4 md:mb-4">
            <div className="absolute right-5 top-5 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-sm">
              ⭐ Recommended
            </div>
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              <span className="text-lg">🥈</span>
              <span>Growth &amp; Booking Package</span>
            </div>
            <h2 className="text-lg font-semibold">
              Best for agencies who want more bookings
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Designed to attract tourists from Google and convert traffic into
              inquiries.
            </p>

            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                Website Development
              </p>
              <p className="mt-1 text-2xl font-semibold">
                <span className="text-base font-normal text-zinc-500 line-through">
                  LKR 65,000
                </span>{" "}
                LKR 45,000{" "}
                <span className="align-middle text-xs font-normal text-zinc-500">
                  one-time
                </span>
              </p>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
              <li>• Everything in Starter Package</li>
              <li>• Advanced SEO optimization</li>
              <li>• Keyword research for Sri Lanka travel market</li>
              <li>• Blog section to attract tourists from Google</li>
              <li>• Booking-focused design to increase inquiries</li>
              <li>• Google tools setup and tracking</li>
            </ul>

            <div className="mt-6 border-t border-dashed border-zinc-200 pt-4 dark:border-zinc-800">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                Monthly Growth Management
              </p>
              <p className="mt-1 text-lg font-semibold">
                LKR 18,000{" "}
                <span className="align-middle text-xs font-normal text-zinc-500">
                  / month
                </span>
              </p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
                <li>• Hosting and security</li>
                <li>• SEO blog management (15+ blogs posts per month)</li>
                <li>• Ongoing Google ranking improvement</li>
                <li>• Tour package updates</li>
                <li>• Monthly performance report</li>
              </ul>
            </div>

            <div className="mt-5 space-y-1 text-sm">
              <p className="font-medium text-emerald-600 dark:text-emerald-400">
                ✔ Best choice if you want steady organic bookings and long-term
                growth.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                ✔ We manage your website while you focus on running tours.
              </p>
            </div>
          </article>

          {/* Premium Business System Package */}
          <article className="relative flex flex-col rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              <span className="text-lg">🥇</span>
              <span>Premium Business System Package</span>
            </div>
            <h2 className="text-lg font-semibold">
              Best for established travel agencies
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Full control over your tours, bookings, and content with your own
              management system.
            </p>

            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                Website Development
              </p>
              <p className="mt-1 text-2xl font-semibold">
                LKR 125,000{" "}
                <span className="align-middle text-xs font-normal text-zinc-500">
                  one-time
                </span>
              </p>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Everything in Growth Package</li>
              <li>• Admin dashboard</li>
              <li>• Manage tours, blogs, gallery and bookings yourself</li>
              <li>• Booking management system</li>
              <li>• Customer inquiry management</li>
              <li>• Full management access</li>
            </ul>

            <div className="mt-6 border-t border-dashed border-zinc-200 pt-4 dark:border-zinc-800">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                Monthly Maintenance
              </p>
              <p className="mt-1 text-lg font-semibold">LKR 8,000 / month</p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Hosting and system monitoring</li>
                <li>• Technical support</li>
                <li>• Security updates</li>
                <li>• Backup management</li>
              </ul>
            </div>

            <p className="mt-5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
              ✔ Perfect if you want your own travel management system.
            </p>
          </article>
        </div>

        <div className="mx-auto flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Interested in a package? Contact me on WhatsApp and schedule a
            meeting.
          </p>
          <a
            href="https://wa.me/94758868067"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-500 dark:hover:bg-emerald-600"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp — 075 886 8067
          </a>
        </div>
      </div>
    </section>
  );
}

