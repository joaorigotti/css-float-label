# Float label apenas com CSS

Trabalhando em um pequeno projeto recentemente tive a oportunidade de implementar o padrão [float label](http://bradfrost.com/blog/post/float-label-pattern/).

Tentando manter as coisas o mais simples possível optei por deixar a CSS encarregada disso. Para atingir o objetivo, usei uma combinação de pseudo-classes (:empty, :valid, :invalid, :focus) e o seletor de elementos adjacentes (+).

## Os problemas

Apesar de funcionar há alguns problemas com essa abordagem, por exemplo:

- A label precisa vir após o input :unamused:;
- Todos os inputs precisam ter o atributo required.

Para pequenos formulários, como um de contato e poucos campos que precisam ser validados, pode ser uma solução aceitável. Para outros, não!

Veja um [exemplo em ação aqui](http://www.joaorigotti.com/labs/float-label/).
