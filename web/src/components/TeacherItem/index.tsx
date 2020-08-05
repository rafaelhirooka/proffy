import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/28057280?s=460&u=e9abff7e74551503b72f4b491e2d682389dc6f38&v=4" alt="Pedro Queiroz" />
        <div>
          <strong>Rafael Hirooka</strong>
          <span>Physics</span>
        </div>
      </header>
      <p>
        The branch of science concerned with the nature and properties
        of matter and energy. The subject matter of physics, distinguished
        from that of chemistry and biology, includes mechanics, heat,
        light and other radiation, sound, electricity, magnetism, and
        the structure of atoms.
      </p>
      <footer>
        <p>
          Price/Hour
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
            Contact
          </button>
      </footer>
    </article>
  )
}

export default TeacherItem;