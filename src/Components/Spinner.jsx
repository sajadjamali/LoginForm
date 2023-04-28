import spinnerGIF from "../assets/gifs/Spinner.gif"

const Spinner = () => {
    return (
        <div className="mt-5 text-center">
            <img src={spinnerGIF} alt="not found"
                 className="w-25"
            />
            <h2 style={{color: "#f1fa8c"}}>Loading...</h2>
        </div>
    );
}

export default Spinner;