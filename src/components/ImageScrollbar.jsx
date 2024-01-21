import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'


export default function ImageSrollbar({ data }) {
  return (
    <CCarousel controls indicators>
      {data.map((item) => (
        <CCarouselItem>
          <CImage className="d-block w-100" src={item.url} alt={item.id} />
        </CCarouselItem>
      ))}
    </CCarousel>
  );
}