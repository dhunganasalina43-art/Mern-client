export default function HomeBanner() {
  return (
    <section
      style={{
        height: "80vh",
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR25rNcWAQWPNBvPWplZKro1M9JL886VllCrDp3uUB4Mg&s=10')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        paddingLeft: "80px",
      }}
    >
      <div style={{ color: "white", maxWidth: "500px" }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          All Your Shopping Needs In One Place
        </h1>

        <p
          style={{
            fontSize: "18px",
            marginBottom: "20px",
          }}
        >
          Discover amazing products at affordable prices with Click & Cart.
        </p>

        <button
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}