export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function GET(request: Request) {
  return new Response(`Hello world!`);
}