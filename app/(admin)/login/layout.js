// Server layout
import { cookies } from "next/headers";
import { CookiesProvider } from "next-client-cookies/server";

export default function LoginLayout({ children }) {
  const cookieStore = cookies();

  return (
    <CookiesProvider value={cookieStore}>
      {children}
    </CookiesProvider>
  );
}
