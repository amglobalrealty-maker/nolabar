/* ---------------------------------------------------------------------------
   NOLA BAR — a agenda das festas. E SO ISTO que muda toda semana.

   Cada festa e um bloco entre chaves. Para trocar a agenda, apague as que ja
   passaram (ou deixe: o site esconde sozinho o que ja aconteceu) e acrescente
   as novas no fim, no mesmo formato. Nao precisa mexer no index.html.

     data       ano-mes-dia, com zeros: '2026-10-09'. O site escreve o dia da
                semana sozinho e esconde a festa depois que ela passa.
     nome       o nome da festa, como vai no cartaz
     detalhe    uma linha a mais (open bar, atracao, vespera de feriado...),
                ou '' para nada
     hora       quando abre, como texto: '23h'
     ingressos  o link do Sympla (ou de outra bilheteria). '' = sem venda
                antecipada, so lista VIP no WhatsApp
     esgotado   true quando acabar: o botao vira "Esgotado" e para de levar
                para a bilheteria

   Os links abaixo sao os que estavam no site antigo em 05/10/2026.
   --------------------------------------------------------------------------- */

window.NOLA_AGENDA = [
  {
    data: '2026-10-09',
    nome: 'O Baile',
    detalhe: 'Open bar',
    hora: '23h',
    ingressos: 'https://www.sympla.com.br/evento/obaile---open-bar----sexta---0910---23h/3596182',
    esgotado: false
  },
  {
    data: '2026-10-10',
    nome: 'Nola apresenta T.I.L.T.',
    detalhe: '',
    hora: '22h',
    ingressos: 'https://www.sympla.com.br/evento/nola-apresenta-t-i-l-t---1010/3596177',
    esgotado: false
  },
  {
    data: '2026-10-11',
    nome: 'O Baile',
    detalhe: 'Open bar · véspera de feriado',
    hora: '23h',
    ingressos: 'https://www.sympla.com.br/evento/obaile---open-bar----domingo---1110/3605903',
    esgotado: false
  },
  {
    data: '2026-10-16',
    nome: 'O Baile',
    detalhe: 'Open bar',
    hora: '23h',
    ingressos: 'https://www.sympla.com.br/evento/obaile---open-bar----sexta---1610---23h/3605669',
    esgotado: false
  },
  {
    data: '2026-10-17',
    nome: 'Nola apresenta T.I.L.T.',
    detalhe: '',
    hora: '22h',
    ingressos: 'https://www.sympla.com.br/evento/nola-apresenta-t-i-l-t---1710/3605672',
    esgotado: false
  }
];
