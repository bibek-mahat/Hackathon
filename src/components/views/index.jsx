import Card from "../notice/Noticecard";
import { Services } from "../services/Services";

export const Section2 = () => {
  return (
    <>
      <section className="container flex justify-between">
        <div>
          <h1>Government Services</h1>
          <Services />
        </div>
        <div>
          <h1>Important Notices and Alert</h1>
          <Card />
        </div>
      </section>
    </>
  );
};
