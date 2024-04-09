import { useState, useEffect } from "react";

const useBase64ToImageUrl = (base64Data: string) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (!base64Data) return;

    let imageUrl = "";

    const convertBase64ToImageUrl = async () => {
      try {
        const binaryString = atob(base64Data);
        const bytes = new Uint8Array(binaryString.length);

        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }

        const blob = new Blob([bytes], { type: "image/png" });

        imageUrl = URL.createObjectURL(blob);
        setImageSrc(imageUrl);
      } catch (error) {
        console.error("Error converting base64 to image:", error);
      }
    };

    convertBase64ToImageUrl();

    // Clean up by revoking the object URL when the component unmounts
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [base64Data]);

  return imageSrc;
};

export default useBase64ToImageUrl;
