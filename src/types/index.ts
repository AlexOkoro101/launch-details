import { InputProps } from "@chakra-ui/react";

export interface NavbarProps {
  variation: 'transparent' | 'solid'
}

export interface HeaderProps {
  title: string;
}

export interface IconProps {
  size?: string;
}

export interface DataProps {
  data: string;
  dataDetail: string;
  type?: string;
}

export type Endpoint = string;

export interface LoaderProps {
  loading: boolean;
};

export interface FetchDataProps {
  isLoading: boolean;
  error: any;
  data: Record<string, any> | null;
}

export interface FetchProps {
  endpoint: Endpoint;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: BodyInit | null | undefined;
}

export interface UseFetchProps extends FetchDataProps {
  callApi: () => void;
}