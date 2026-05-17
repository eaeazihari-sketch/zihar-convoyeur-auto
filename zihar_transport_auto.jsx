export default function SiteInternet() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold">Zihar Transport Auto</h1>
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#apropos" className="hover:text-blue-600">À propos</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-8 py-24 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-5xl mx-auto mb-10">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop"
            alt="Convoyage automobile"
            className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
          />
        </div>
        <h2 className="text-5xl font-extrabold mb-6">
          Livraison de Véhicules Partout en France
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
          Zihar Transport Auto propose un service de convoyage automobile fiable et sécurisé partout en France pour les professionnels et les particuliers avec des délais rapides de 24h à 48h.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">
            Devis par mail
          </button>
          <button className="px-6 py-3 rounded-2xl border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition">
            En savoir plus
          </button>
                  <div className="p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4">Livraison Express Week-end</h4>
            <p className="text-gray-600">
              Service de convoyage disponible les week-ends et jours fériés pour les demandes urgentes partout en France.
            </p>
          </div>

          </div>
      </section>

      {/* Services */}
      <section id="services" className="px-8 py-20 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Services de Convoyage Automobile</h3>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4">Convoyage Partout en France</h4>
            <p className="text-gray-600">
              Livraison et convoyage de véhicules partout en France avec un service rapide, sécurisé et professionnel pour particuliers et entreprises.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4">Livraison Rapide</h4>
            <p className="text-gray-600">
              Prise en charge rapide avec un délai de livraison estimé entre 24h et 48h partout en France, y compris les week-ends et jours fériés avec service de livraison express.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4">Assurance & Sécurité</h4>
            <p className="text-gray-600">
              Tous les véhicules transportés sont assurés et convoyés avec professionnalisme.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="apropos" className="px-8 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">À propos</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nous créons des expériences web modernes adaptées aux entrepreneurs,
            indépendants et petites entreprises. Notre objectif est de rendre le
            web accessible, esthétique et efficace.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="px-8 py-10 max-w-5xl mx-auto">
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-sm">
          <h3 className="text-3xl font-bold text-center mb-8">Tarifs selon le type de véhicule</h3>
          <div className="max-w-3xl mx-auto text-center text-lg text-gray-700 space-y-4">
            <p>
              Tarifs à partir de 90€ selon le type de véhicule et la distance à parcourir.
            </p>
            <p>
              Véhicule de luxe : sur devis.
            </p>
            <p>
              Prix total communiqué rapidement par devis.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-8 py-20 max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-2">Contact</h3>
        <p className="text-gray-500 mb-6">Basé à Montélimar 26200</p>
        <p className="text-gray-600 mb-4">
          Professionnels et particuliers : contactez-nous pour obtenir un devis par mail rapidement et facilement.
        </p>
        <p className="text-lg font-semibold text-blue-600 mb-2">
          Téléphone : 07 64 43 49 46
        </p>
        <p className="text-lg font-semibold text-green-600 mb-2">
          Contact rapide par mail 7j/7 • Réponse rapide garantie
        </p>
        <p className="text-lg font-semibold text-gray-700 mb-2">
          Email : eaeazihari@gmail.com
        </p>
        

        <form className="grid gap-4 text-left">
          <input
            type="text"
            placeholder="Votre nom"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Votre message"
            rows={5}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
            Envoyer
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © 2026 Zihar Transport Auto — Tous droits réservés.
      </footer>
    </div>
  )
}
