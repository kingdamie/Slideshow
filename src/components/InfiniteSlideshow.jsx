import image1 from "../assets/got1.jpg"
import image2 from "../assets/got2.jpg";
import image3 from "../assets/got3.jpg";
import image4 from "../assets/got4.jpg";
import image5 from "../assets/got5.jpg";
import image6 from "../assets/got6.jpg";
import image7 from "../assets/got7.jpg";
import image8 from "../assets/got8.jpg";
import image9 from "../assets/got9.jpg";
import image10 from "../assets/got10.jpg"
import image11 from "../assets/got11.jpg";
import image12 from "../assets/got12.jpg";

export const InfiniteSlideshow = () => {
    const images = [
			image1,
			image2,
			image3,
			image4,
			image5,
			image6,
			image7,
			image8,
			image9,
			image10,
			image11,
			image12,
		];
  return (
		<div className="slider">
			<div className="slide-track">
				{images.map((src, index) => (
					<div className="slide" key={index}>
						<img src={src} alt={`Slide ${index + 1}`} />
					</div>
				))}
				{/* Duplicates for seamless transition */}
				{images.map((src, index) => (
					<div className="slide" key={index + images.length}>
						<img src={src} alt={`Slide ${index + 1}`} />
					</div>
				))}
			</div>
		</div>
	);
}
