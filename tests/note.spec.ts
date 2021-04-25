import 'mocha';
import {expect} from 'chai';
import {Note} from '../src/note';


describe('Pruebas para la clase Note', () => {
  let nota = new Note('TEST NOTE', 
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum lorem a sapien imperdiet, non facilisis nunc congue. Praesent tincidunt mauris lacinia tincidunt lacinia', 
  'Amarillo');

  it('nota es una instancia correctamente creada de la clase Note✅', () => {
    expect(nota).to.be.instanceOf(Note);
  });

  it('El título de la nota es: "TEST NOTE"✅', () => {
    expect(nota.getTitle()).to.be.eql('TEST NOTE');
  });

  it('El título de la nota es editable mediante el setter✅', () => {
    nota.setTitle('NEW TITLE');
    expect(nota.getTitle()).to.be.eql('NEW TITLE');
  });

  it('El contenido de la nota se obtiene correctamente✅', () => {
    expect(nota.getContent()).to.be.eql('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum lorem a sapien imperdiet, non facilisis nunc congue. Praesent tincidunt mauris lacinia tincidunt lacinia');
  });

  it('El contenido de la nota es editable mediante el setter✅', () => {
    nota.setContent('New content');
    expect(nota.getContent()).to.be.eql('New content');
  });

  it('El color de la nota es amarillo✅', () => {
    expect(nota.getColor()).to.be.eql('Amarillo');
  });

  it('El color de la nota es editable mediante el setter✅', () => {
    nota.setColor('Azul');
    expect(nota.getColor()).to.be.eql('Azul');
  });

  it('Podemos obtener la nota en formato JSON✅', () => {
    let noteJSON = nota.toJSON();
    expect(noteJSON).to.be.eql(`{
"titulo": "NEW TITLE",
"cuerpo": "New content",
"color": "Azul"
}`
  );
  });
});