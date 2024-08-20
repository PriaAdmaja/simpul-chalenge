
import iconLoadingSmall from "../../../assets/icons/icon-loading-small.svg";

const NoConnection = () => {
    return (
        <section className="flex items-center gap-3 p-3 bg-[#e9f3ff] rounded-md mx-8 my-2">
        <img
          src={iconLoadingSmall}
          alt="loading"
          className="w-8 animate-spin"
        />
        <p className="text-bg-main-secondary">
          Please wait while we connect you with one of our team ...
        </p>
      </section>
    )
}

export default NoConnection