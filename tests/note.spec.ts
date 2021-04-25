import 'mocha';
import {expect} from 'chai';
import {Note} from '../src/note';
import { commandFunctions } from '../src/commandFunctions';
import * as fs from 'fs';

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
"title": "NEW TITLE",
"content": "New content",
"color": "Azul"
}`
  );
  });
});


describe('Pruebas para las funciones de manejo de ficheros: ', () => {
  let commands = new commandFunctions();
  it('Es posible crear una nota correctamente✅', () => {
    commands.addNote('Alberto', 'TEST_NOTE', 'Note for testing', 'blue');
    expect(fs.existsSync('notes/Alberto/TEST_NOTE.json')).true;
  });

  it('Es posible editar una nota existente✅', () => {
    commands.editNote('Alberto', 'TEST_NOTE', 'Content modified', 'yellow');
    expect(fs.existsSync('notes/Alberto/TEST_NOTE.json')).true;
    
    let data = fs.readFileSync('notes/Alberto/TEST_NOTE.json');
    expect(data.toString()).to.be.eql('{\n\"title\": \"TEST_NOTE' + '\",\n\"content\": \"Content modified' + '\",\n\"color\": \"yellow' + '\"\n}');
  });

  it('Es posible mostrar una lista de las notas del usuario✅', () => {
    commands.addNote('Alberto', 'OTHER_TEST', 'test note', 'black');

    let note_2 = new Note('TEST_NOTE', 'Content modified', 'yellow');
    let note_1 = new Note('OTHER_TEST', 'test note','black');
    
    expect(commands.showNotes('Alberto')).to.be.eql([note_1, note_2]);
  });

  it('Es posible leer el contenido de una nota✅', () => {
    commands.addNote('Alberto', 'ANOTHER', 'Note for testing', 'blue');
    expect(commands.readNote('Alberto', 'ANOTHER')).not.to.be.equal(null);
  });

  it('Es posible elminiar una nota✅', () => {
    commands.deleteNote('Alberto', 'OTHER_TEST');
    expect(fs.existsSync('notes/Alberto/OTHER_TEST.json')).false;
  });
});