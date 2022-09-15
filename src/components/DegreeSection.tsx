import { WeatherData } from "../interfaces/WeatherData";
export const DegreeSection = ({
  data: { temperature, description, icon },
}: {
  data: WeatherData;
}) => {
  return (
    <>
      <section className="text-5xl font-bold text-white">
        <span className="text-green-500" id="temperature">
          {temperature}
        </span>
        °C
      </section>
      <section>
        <img src={icon} alt="" id="iconImg" />
      </section>
      <section
        className="font-bold uppercase text-xl mb-6 text-white"
        id="description"
      >
        {description}
      </section>
    </>
  );
};
