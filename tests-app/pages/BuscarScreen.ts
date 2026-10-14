import type { Locator } from 'mobilewright';
import { BaseScreen } from './BaseScreen';
import { ListadoScreen } from './ListadoScreen';

/** Pantalla de búsqueda del tab Buscar: campo `product-search` ("¿Qué estás buscando?") y "Cancelar". */
export class BuscarScreen extends BaseScreen {
  get campo(): Locator {
    return this.screen.getByTestId('product-search');
  }

  get cancelar(): Locator {
    return this.screen.getByRole('button', { name: 'Cancelar' });
  }

  get readyLocator(): Locator {
    return this.campo;
  }

  /** Escribe el término y confirma con "Buscar" del teclado: abre la SRP. */
  async buscar(termino: string): Promise<ListadoScreen> {
    await this.campo.fill(termino);
    await this.screen.pressButton('ENTER');
    return new ListadoScreen(this.screen, this.plataforma);
  }

  /** Encabezado de la SRP: "Resultado para “<término>”" (testID product-results-ready-<término>). */
  resultadoPara(termino: string): Locator {
    return this.screen.getByTestId(`product-results-ready-${termino}`);
  }
}
