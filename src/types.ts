import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      's-select': React.DetailedHTMLProps<SSelectorProps, HTMLElement>;
    }
  }
}

// Interfaccia per le props specifiche del componente
export interface SSelectorProps extends React.HTMLAttributes<HTMLElement> {

}