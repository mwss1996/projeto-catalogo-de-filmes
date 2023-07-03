import Link from "next/link";
import styles from "./layout.module.scss";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
  isAdmin?: boolean;
}
export default function Layout(props: LayoutProps) {
  return (
    <div className={[styles.root, props.isAdmin ? styles.admin : ""].join(" ")}>
      <Head>
        <title>Catálogo de Filmes</title>
      </Head>
      <header>
        <div className={["width", styles.headerContent].join(" ")}>
          <h1>
            <Link href={props.isAdmin ? "/admin" : "/"}>
              Catálogo de Filmes{" "}
              {props.isAdmin ? (
                <span className={styles.adminLabel}>ADMIN</span>
              ) : null}
            </Link>
          </h1>
          {props.isAdmin && (
            <Link href={"/"} className={styles.exitAdmin}>
              SAIR
            </Link>
          )}
        </div>
      </header>
      <main>
        <div className="width">{props.children}</div>
      </main>
      <footer>
        <div className="width">Desenvolvido por Michael Wallace</div>
      </footer>
    </div>
  );
}
