import type { Locator, Screen } from 'mobilewright';
import type { Plataforma } from '../../tests/support/rutasEvidencia';
import { BaseScreen } from './BaseScreen';
import { CategoriasModal } from './CategoriasModal';
import { proporcionRoja } from '../support/pixeles';

/**
 * TabBar inferior de la app (Home, Categorías, Buscar, Mis productos, Mi cuenta).
 *
 * Cada tab publica su `testID` como `tab-<Nombre>` (Android: identificador del nodo), con el
 * nombre tal como lo muestra la UI, tildes incluidas: `tab-Categorías`. Verificado en Android con
 * el build v1.0.7 (2026-10-06).
 */
export class TabBar extends BaseScreen {
  constructor(screen: Screen, plataforma: Plataforma) {
    super(screen, plataforma);
  }

  tab(nombre: 'Home' | 'Categorías' | 'Buscar' | 'Mis productos' | 'Mi cuenta'): Locator {
    return this.screen.getByTestId(`tab-${nombre}`);
  }

  get readyLocator(): Locator {
    return this.tab('Home');
  }

  /** Selector de forma de entrega del Home: confirma que se está en el Home. */
  get selectorDeEntrega(): Locator {
    return this.screen.getByTestId('delivery-open');
  }

  /**
   * Icono sandwich del header, el segundo punto de entrada al modal de categorías que pide la HU.
   *
   * En v1.0.7 (Android, 2026-10-06) no existe en ninguna pantalla: no hay nodo con ese rol ni con
   * un nombre de menú. Se busca por nombre accesible de menú, que es como lo expondría la app.
   */
  get iconoSandwich(): Locator {
    return this.screen.getByRole('button', { name: /men[uú]|sandwich|hamburgues|abrir categor/i });
  }

  async tapIconoSandwich(): Promise<CategoriasModal> {
    await this.iconoSandwich.tap();
    return new CategoriasModal(this.screen, this.plataforma);
  }

  async tapCategorias(): Promise<CategoriasModal> {
    await this.tab('Categorías').tap();
    return new CategoriasModal(this.screen, this.plataforma);
  }

  async tapBuscar(): Promise<void> {
    await this.tab('Buscar').tap();
  }

  /** La pantalla del tab Buscar: su botón "Cancelar" junto al campo de búsqueda. */
  get pantallaBuscar(): Locator {
    return this.screen.getByRole('button', { name: 'Cancelar' });
  }

  async tapHome(): Promise<void> {
    await this.tab('Home').tap();
  }

  async tapMisProductos(): Promise<void> {
    await this.tab('Mis productos').tap();
  }

  /**
   * Quinto tab, el de la cuenta. B2C-22 lo llama "Inicio de sesión" para el invitado y "Mi cuenta"
   * con sesión; en v1.0.7 (Android, 2026-10-06) el invitado ve `tab-Mi cuenta`.
   */
  async tapCuenta(): Promise<void> {
    await this.tab('Mi cuenta').tap();
  }

  /**
   * Los tabs que la TabBar muestra hoy, por su etiqueta visible. Se prueba contra los nombres de
   * v1.0.7 y los que pide B2C-22 ("Búsqueda", "Favoritos", "Inicio de sesión"), con y sin tilde.
   */
  async etiquetasVisibles(): Promise<string[]> {
    const candidatos = [
      'Home', 'Inicio', 'Categorías', 'Categorias', 'Buscar', 'Búsqueda', 'Busqueda',
      'Favoritos', 'Mis productos', 'Inicio de sesión', 'Inicio de sesion', 'Mi cuenta',
    ];
    const visibles: string[] = [];
    for (const c of candidatos) {
      if (await this.screen.getByTestId(`tab-${c}`).isVisible({ timeout: 0 })) visibles.push(c);
    }
    return visibles;
  }

  /** Campo de búsqueda con placeholder dentro de la propia TabBar (lo que pide B2C-22 al centro). */
  async tieneCampoDeBusquedaEnLaBarra(): Promise<boolean> {
    const barra = await this.tab('Home').boundingBox();
    const campos = await this.screen.getByRole('textfield').all();
    for (const c of campos) {
      const caja = await c.boundingBox({ timeout: 0 }).catch(() => null);
      if (caja && caja.y + caja.height > barra.y) return true;
    }
    return false;
  }

  /**
   * Proporción de píxeles rojos del icono de un tab (0..1). El tab activo se pinta rojo y los
   * inactivos en gris: en v1.0.7 el activo ronda 0,1 y los inactivos dan 0.
   */
  async proporcionRojo(nombre: Parameters<TabBar['tab']>[0]): Promise<number> {
    return proporcionRoja(await this.tab(nombre).screenshot());
  }

  /** Floating Pill del carro ("Ir al carro"); en v1.0.7 publica el testID `cart-open`. */
  get floatingPill(): Locator {
    return this.screen.getByTestId('cart-open');
  }

  /**
   * Texto del Floating Pill: "<N> unidades, Te faltan $X para despacho GRATIS, Ir al carro" en
   * v1.0.7 (Android, 2026-10-09).
   */
  async textoDelPill(): Promise<string> {
    return (await this.floatingPill.getText()).trim();
  }

  /** La cantidad que anuncia el Floating Pill ("<N> unidades"), o null si no la trae. */
  async unidadesEnElPill(): Promise<number | null> {
    const m = /(\d+)\s+unidad/i.exec(await this.textoDelPill());
    return m ? Number(m[1]) : null;
  }

  async tapFloatingPill(): Promise<void> {
    await this.floatingPill.tap();
  }

  /**
   * Lo que muestra el tab de la cuenta: con sesión, la inicial del nombre más "Mi cuenta"
   * ("K, Mi cuenta"); sin sesión, solo "Mi cuenta". Devuelve la inicial o null.
   */
  async inicialDeLaCuenta(): Promise<string | null> {
    const texto = (await this.tab('Mi cuenta').getText()).trim();
    const m = /^(\p{L}{1,2}),\s*Mi cuenta$/u.exec(texto);
    return m ? m[1] : null;
  }
}
