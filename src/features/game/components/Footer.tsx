import { StateContext } from "@contexts";
import { use } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaCog, FaChevronLeft } from "react-icons/fa";

export function Footer() {
    const game = use(StateContext);

    return (
        <footer className="page-footer">
            <button className="btn btn-solid">
                <FaChevronLeft />
            </button>
            <button className="btn btn-solid">
                <FaCog />
            </button>
            <button className={`btn btn-${game.state === "stopped" ? "primary" : "solid"}`}>
                <p className="btn-label">
                    {game.state === "stopped" ? "Next" : "Skip"}
                </p>
                <BsArrowRight />
            </button>
        </footer>
    );
}