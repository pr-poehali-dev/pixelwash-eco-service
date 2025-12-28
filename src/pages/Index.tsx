import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

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

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-purple to-teal text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Начните с PixelWash сегодня</h2>
            <p className="text-xl opacity-90">
              Скачайте приложение и получите первую мойку со скидкой 50%
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" variant="secondary" className="bg-white text-purple hover:bg-gray-100 w-full sm:w-auto">
                <Icon name="Apple" size={20} className="mr-2" />
                App Store
              </Button>
              <Button size="lg" variant="secondary" className="bg-white text-teal hover:bg-gray-100 w-full sm:w-auto">
                <Icon name="Smartphone" size={20} className="mr-2" />
                Google Play
              </Button>
            </div>
            <div className="pt-8 space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Icon name="Mail" size={20} />
                <a href="mailto:info@pixelwash.ru" className="hover:underline">info@pixelwash.ru</a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Icon name="Phone" size={20} />
                <a href="tel:+74951234567" className="hover:underline">+7 (495) 123-45-67</a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Icon name="MapPin" size={20} />
                <span>Москва, 12 станций по всему городу</span>
              </div>
            </div>
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