import React, { useState } from "react";

const Questions = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="my-5 text-center">
            {/* Bouton ouverture */}
            <button className="btn-open" onClick={() => setOpen(true)}>
                🎥 Ouvrir la vidéo
            </button>

            {/* Overlay */}
            {open && (
                <div className="overlay" onClick={() => setOpen(false)}>
                    <div
                        className="custom-modal"
                        onClick={(e) => e.stopPropagation()} // évite la fermeture si clic sur la vidéo
                    >
                        <iframe
                            src="https://www.youtube.com/embed/X7IAfiGgBRA?rel=0&autoplay=1"
                            title="YouTube video"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Questions;
