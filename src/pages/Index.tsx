import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Спасибо за обращение!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: 'Brain',
      title: 'ИИ-анализ загрязнений',
      description: 'Искусственный интеллект сканирует ваш автомобиль и определяет оптимальную программу мойки',
      features: ['Распознавание типа загрязнения', 'Персональная программа мойки', 'Экономия времени и средств']
    },
    {
      icon: 'Sparkles',
      title: 'Премиум-косметика',
      description: 'Используем только профессиональную автохимию премиум-класса для бережного ухода',
      features: ['Безопасно для ЛКП', 'Эко-составы', 'Долговременная защита']
    },
    {
      icon: 'Smartphone',
      title: 'Smart-управление',
      description: 'Управляйте процессом через мобильное приложение и отслеживайте статус в реальном времени',
      features: ['Бесконтактная оплата', 'История посещений', 'Программа лояльности']
    }
  ];

  const faqItems = [
    {
      question: 'Как работает ИИ-анализ?',
      answer: 'Камеры на станции сканируют автомобиль, нейросеть распознает тип и степень загрязнения, затем система автоматически подбирает оптимальную программу мойки и концентрацию химии.'
    },
    {
      question: 'Безопасна ли автоматическая мойка для ЛКП?',
      answer: 'Да, мы используем бесконтактную технологию и премиум-косметику с pH-нейтральными составами. Система ИИ контролирует давление и температуру воды для каждого типа покрытия.'
    },
    {
      question: 'Сколько времени занимает мойка?',
      answer: 'Стандартная программа занимает 8-12 минут. Премиум-мойка с воском и полировкой — до 20 минут. ИИ оптимизирует время в зависимости от загрязнения.'
    },
    {
      question: 'Где находятся ваши станции в Москве?',
      answer: 'У нас 12 станций по всей Москве: ЦАО (3), СВАО (2), СЗАО (2), ЮАО (2), ЮВАО (2), ЗАО (1). Все адреса доступны в мобильном приложении с навигацией.'
    },
    {
      question: 'Какие способы оплаты доступны?',
      answer: 'Принимаем все виды карт, Apple Pay, Google Pay, Samsung Pay. Также можно пополнить баланс в приложении и получить бонусы до 15%.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-teal-50">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/b3a34a23-c9fb-4f95-85ea-96989c0ed03f/files/7138223c-9b5a-482a-9662-3549043f6733.jpg" 
              alt="PixelWash logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple to-teal bg-clip-text text-transparent">
              PixelWash
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-700 hover:text-purple transition-colors">Услуги</a>
            <a href="#team" className="text-gray-700 hover:text-purple transition-colors">Команда</a>
            <a href="#faq" className="text-gray-700 hover:text-purple transition-colors">FAQ</a>
            <a href="#contacts" className="text-gray-700 hover:text-purple transition-colors">Контакты</a>
          </nav>
          <Button className="bg-gradient-to-r from-purple to-teal hover:opacity-90 transition-opacity">
            <Icon name="Download" size={16} className="mr-2" />
            Скачать приложение
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Смарт-мойка <span className="bg-gradient-to-r from-purple to-teal bg-clip-text text-transparent">нового поколения</span>
              </h1>
              <p className="text-xl text-gray-600">
                ИИ-технологии для идеальной чистоты вашего автомобиля. Экологично, быстро, премиально.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple to-teal hover:opacity-90 transition-opacity">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Найти станцию
                </Button>
                <Button size="lg" variant="outline" className="border-purple text-purple hover:bg-purple-50">
                  <Icon name="Play" size={20} className="mr-2" />
                  Как это работает
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-purple">12</div>
                  <div className="text-sm text-gray-600">Станций в Москве</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal">24/7</div>
                  <div className="text-sm text-gray-600">Работаем круглосуточно</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-dark">99%</div>
                  <div className="text-sm text-gray-600">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-purple/20 to-teal/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/b3a34a23-c9fb-4f95-85ea-96989c0ed03f/files/df3e70d4-8751-4d03-ab0f-0fdd9aada9d1.jpg" 
                alt="PixelWash станция" 
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Технологии будущего доступны уже сегодня</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-purple transition-all duration-300 hover:shadow-xl cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-purple to-teal flex items-center justify-center mb-4 transition-transform duration-300 ${activeService === index ? 'scale-110' : ''}`}>
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="CheckCircle" size={20} className="text-teal mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-gray-600">Профессионалы, которые заботятся о вашем авто</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-purple transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-6">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple/10 to-teal/10 rounded-2xl blur-xl"></div>
                  <img 
                    src="https://cdn.poehali.dev/projects/b3a34a23-c9fb-4f95-85ea-96989c0ed03f/files/487b3d87-7f2a-4f28-a28d-af2da341c963.jpg" 
                    alt="Алексей Морозов" 
                    className="relative w-full h-64 object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Алексей Морозов</h3>
                <p className="text-purple font-semibold mb-3">Руководитель сети станций</p>
                <p className="text-gray-600 text-sm">15 лет в индустрии автомоек. Внедрил ИИ-технологии во все процессы обслуживания клиентов.</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-purple transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-6">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple/10 to-teal/10 rounded-2xl blur-xl"></div>
                  <img 
                    src="https://cdn.poehali.dev/projects/b3a34a23-c9fb-4f95-85ea-96989c0ed03f/files/8ff269b5-ffe8-4809-9419-81435cf94d2b.jpg" 
                    alt="Мария Соколова" 
                    className="relative w-full h-64 object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Мария Соколова</h3>
                <p className="text-teal font-semibold mb-3">Главный технолог</p>
                <p className="text-gray-600 text-sm">Эксперт по автохимии с международными сертификатами. Подбирает безопасные эко-составы для каждого типа покрытия.</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-purple transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-6">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple/10 to-teal/10 rounded-2xl blur-xl"></div>
                  <img 
                    src="https://cdn.poehali.dev/projects/b3a34a23-c9fb-4f95-85ea-96989c0ed03f/files/83132bde-91bd-4574-93ae-eef395847970.jpg" 
                    alt="Дмитрий Волков" 
                    className="relative w-full h-64 object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Дмитрий Волков</h3>
                <p className="text-purple-dark font-semibold mb-3">Ведущий инженер ИИ-систем</p>
                <p className="text-gray-600 text-sm">Разработчик нейросети для анализа загрязнений. Оптимизирует алгоритмы для максимальной точности.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-xl text-gray-600">Всё, что нужно знать о PixelWash</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl border-2 border-gray-100 px-6 hover:border-purple transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-purple">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты и локации</h2>
            <p className="text-xl text-gray-600">Найдите ближайшую станцию PixelWash</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="border-2 border-purple-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" size={24} className="text-purple" />
                    Наши станции в Москве
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold mb-1">ЦАО - Центр</h4>
                    <p className="text-sm text-gray-600">ул. Тверская, 15 • ул. Мясницкая, 42 • Садовое кольцо, 8</p>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold mb-1">СВАО - Северо-Восточный</h4>
                    <p className="text-sm text-gray-600">просп. Мира, 128 • ул. Ярославская, 56</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold mb-1">СЗАО - Северо-Западный</h4>
                    <p className="text-sm text-gray-600">Ленинградское ш., 94 • ул. Свободы, 23</p>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold mb-1">ЮАО и ЮВАО - Юг</h4>
                    <p className="text-sm text-gray-600">Каширское ш., 67 • Волгоградский просп., 112 • ул. Люблинская, 45 • просп. Андропова, 89</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold mb-1">ЗАО - Западный</h4>
                    <p className="text-sm text-gray-600">Кутузовский просп., 48</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-teal-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Phone" size={24} className="text-teal" />
                    Связаться с нами
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={20} className="text-purple" />
                    <a href="mailto:info@pixelwash.ru" className="text-gray-700 hover:text-purple transition-colors">info@pixelwash.ru</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={20} className="text-teal" />
                    <a href="tel:+74951234567" className="text-gray-700 hover:text-teal transition-colors">+7 (495) 123-45-67</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={20} className="text-purple" />
                    <span className="text-gray-700">Круглосуточно, 24/7</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden border-2 border-gray-200">
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A64d4c18b6b1ab5ef8c6f0c3d5f5e8c4f3b5c8b6b1ab5ef8c6f0c3d5f5e8c4f&amp;source=constructor" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-purple to-teal text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold">Форма обратной связи</h2>
              <p className="text-xl opacity-90">
                Оставьте заявку и получите первую мойку со скидкой 50%
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" variant="secondary" className="bg-white text-purple hover:bg-gray-100 w-full sm:w-auto">
                  <Icon name="Apple" size={20} className="mr-2" />
                  App Store
                </Button>
                <Button size="lg" variant="secondary" className="bg-white text-teal hover:bg-gray-100 w-full sm:w-auto">
                  <Icon name="Smartphone" size={20} className="mr-2" />
                  Google Play
                </Button>
              </div>
            </div>
            <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Свяжитесь с нами</CardTitle>
                <CardDescription>Заполните форму и мы перезвоним в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="bg-white"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Телефон" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="bg-white"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Ваше сообщение" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="bg-white"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-purple to-teal hover:opacity-90">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="https://cdn.poehali.dev/projects/b3a34a23-c9fb-4f95-85ea-96989c0ed03f/files/7138223c-9b5a-482a-9662-3549043f6733.jpg" 
              alt="PixelWash logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold">PixelWash</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 PixelWash. Смарт-автомойки нового поколения
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;