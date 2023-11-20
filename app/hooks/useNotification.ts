import {useEffect} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {toast} from "sonner";

interface IParams {
    query: string,
    status: 'success' | 'error' | 'warning',
    keyText: string,
    isRouter: boolean,
    to?: string,
}
export const useNotification = (params: IParams[]) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const createConditional = (params: IParams[]) => {
        params.forEach(param => {
            if (param.isRouter) {
                if (searchParams.get(param.query)) {
                    toast[param.status](param.keyText);
                    router.replace(param.to || '/');
                }
            } else {
                if (searchParams.get(param.query)) {
                    toast[param.status](param.keyText);
                }
            }
        })
    }

    useEffect(() => {
        createConditional(params);
    }, [params, router, searchParams])
}