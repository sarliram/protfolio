export const Brands = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Brands</h1>

        <p className="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">
          Below is a summary of the places I studied
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <img src="assets/image/brand-1.png" alt="Image" />

          <img src="assets/image/brand-2.png" alt="Image" />

          <img src="assets/image/brand-3.png" alt="Image" />

          <img src="assets/image/brand-4.png" alt="Image" />

          <img src="assets/image/brand-5.png" alt="Image" />

          <img src="assets/image/brand-6.png" alt="Image" />
        </div>
      </div>
    </section>
  )
}
