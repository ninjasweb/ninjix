import styles from "./styles.module.css"

// BlurredImageCard component for static image
const BlurredImageCard = () => {
  return (
    <>
      <div className={`${styles.flyer} relative max-w-[400px] mx-auto`}>
        <img
          className={`relative object-cover w-full h-full mt-4 z-[2] rounded-md`}
          src={"/images/flyer_berlin.jpg"}
          alt="Flyer"
          title="Flyer"
        />
      </div>
    </>
  )
}

export default BlurredImageCard
