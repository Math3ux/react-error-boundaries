import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

class ErrorBoundary extends React.Component<Props> {
    state = { temErro: false};

    static getDerivedStateFromError(error: Error) {
        return { temErro: true };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.error("Erro Identificado: "+error, info);
    }

    render() {
        if (this.state.temErro) {
            return <h1>Algo deu Errado</h1>;
        }
        return this.props.children;
    }
}