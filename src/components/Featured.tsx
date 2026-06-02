import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Flame",
    title: "Отопление",
    description: "Проектируем и монтируем системы отопления: радиаторные, тёплые полы, котельные. Подбираем оптимальное решение под объект и бюджет.",
  },
  {
    icon: "Wind",
    title: "Вентиляция",
    description: "Приточно-вытяжные системы, рекуперация тепла, вентиляция для производств и офисов. Свежий воздух без сквозняков и потерь тепла.",
  },
  {
    icon: "Thermometer",
    title: "Кондиционирование",
    description: "Мульти-сплит системы, VRF/VRV, прецизионное кондиционирование. Комфортный микроклимат в любое время года.",
  },
  {
    icon: "Droplets",
    title: "Водоснабжение",
    description: "Холодное и горячее водоснабжение, канализация, насосные станции. Надёжные системы для жилых и промышленных объектов.",
  },
];

export default function Featured() {
  return (
    <div id="services" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Что мы делаем</h3>
          <p className="text-3xl lg:text-5xl text-neutral-900 leading-tight max-w-2xl">
            Полный цикл инженерных работ — от проекта до сдачи объекта
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-neutral-200">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex gap-6 py-10 px-6 border-b border-r border-neutral-200 hover:bg-neutral-50 transition-colors duration-300"
            >
              <div className="shrink-0 mt-1">
                <Icon name={service.icon} size={28} className="text-neutral-800" fallback="Settings" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2 uppercase tracking-wide">{service.title}</h4>
                <p className="text-neutral-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-start">
          <button className="bg-black text-white border border-black px-8 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer uppercase tracking-wide">
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  );
}
