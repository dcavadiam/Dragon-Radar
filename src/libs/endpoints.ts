const API = process.env.NEXT_PUBLIC_SITE_URL;

export const getEndpoint = ({endpoint, id}:{endpoint:string, id?:string}) => {
  switch (endpoint) {
    case "ALL_CHARACTERS":
      return `${API}/api/characters`;
    case "CHARACTER":
      return `${API}/api/characters/${id}`;
    default:
      return `${API}/api/characters`;
  }
};