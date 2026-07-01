import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  protected readonly whatsappUrl =
    'https://wa.me/5500000000000?text=Oi%20Mayra!%20Quero%20agendar%20minha%20avalia%C3%A7%C3%A3o%20gratuita.';

  protected readonly services = [
    {
      title: 'Emagrecimento feminino',
      desc: 'Perca gordura sem perder massa — com treino pensado pro corpo da mulher.',
    },
    {
      title: 'Hipertrofia & definição',
      desc: 'Ganhe curvas, defina e fique forte com método progressivo e seguro.',
    },
    {
      title: 'Treino 100% personalizado',
      desc: 'Nada de planilha genérica. Cada série é montada pra você e sua rotina.',
    },
    {
      title: 'Atendimento presencial',
      desc: 'Correção de postura e execução em tempo real — você treina do jeito certo desde o dia 1.',
    },
    {
      title: 'Consultoria online',
      desc: 'Acompanhamento mesmo quando não pode ir presencialmente.',
    },
    {
      title: 'Avaliação gratuita',
      desc: 'Primeiro passo sem compromisso. Vamos entender seu objetivo e montar seu plano juntas.',
    },
  ];

  protected readonly highlights = [
    'Treino estratégico feito pra corpo feminino',
    'Acompanhamento 1:1 — você nunca treina sozinha',
    'Resultados visíveis, não promessas vazias',
  ];

  protected readonly forWho = [
    'Cansou de treinar e não ver mudança no espelho',
    'Quer emagrecer ou definir com orientação de verdade',
    'Precisa de alguém que te puxe quando a motivação falhar',
    'Quer treinar com segurança e confiança no processo',
  ];
}
