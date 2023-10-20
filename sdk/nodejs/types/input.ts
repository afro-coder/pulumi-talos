// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export namespace client {
    export interface ConfigurationClientConfiguration {
        /**
         * The client CA certificate
         */
        caCertificate: string;
        /**
         * The client certificate
         */
        clientCertificate: string;
        /**
         * The client key
         */
        clientKey: string;
    }

    export interface ConfigurationClientConfigurationArgs {
        /**
         * The client CA certificate
         */
        caCertificate: pulumi.Input<string>;
        /**
         * The client certificate
         */
        clientCertificate: pulumi.Input<string>;
        /**
         * The client key
         */
        clientKey: pulumi.Input<string>;
    }
}

export namespace cluster {
    export interface KubeconfigClientConfiguration {
        /**
         * The client CA certificate
         */
        caCertificate: string;
        /**
         * The client certificate
         */
        clientCertificate: string;
        /**
         * The client key
         */
        clientKey: string;
    }

    export interface KubeconfigClientConfigurationArgs {
        /**
         * The client CA certificate
         */
        caCertificate: pulumi.Input<string>;
        /**
         * The client certificate
         */
        clientCertificate: pulumi.Input<string>;
        /**
         * The client key
         */
        clientKey: pulumi.Input<string>;
    }

}

export namespace machine {
    export interface BootstrapClientConfiguration {
        /**
         * The client CA certificate
         */
        caCertificate: pulumi.Input<string>;
        /**
         * The client certificate
         */
        clientCertificate: pulumi.Input<string>;
        /**
         * The client key
         */
        clientKey: pulumi.Input<string>;
    }

    export interface ConfigurationApplyClientConfiguration {
        /**
         * The client CA certificate
         */
        caCertificate: pulumi.Input<string>;
        /**
         * The client certificate
         */
        clientCertificate: pulumi.Input<string>;
        /**
         * The client key
         */
        clientKey: pulumi.Input<string>;
    }

    export interface ConfigurationMachineSecrets {
        /**
         * The certs for the talos kubernetes cluster
         */
        certs: inputs.machine.ConfigurationMachineSecretsCerts;
        /**
         * The cluster secrets
         */
        cluster: inputs.machine.ConfigurationMachineSecretsCluster;
        /**
         * The secrets for the talos kubernetes cluster
         */
        secrets: inputs.machine.ConfigurationMachineSecretsSecrets;
        /**
         * The trustd info for the talos kubernetes cluster
         */
        trustdinfo: inputs.machine.ConfigurationMachineSecretsTrustdinfo;
    }

    export interface ConfigurationMachineSecretsArgs {
        /**
         * The certs for the talos kubernetes cluster
         */
        certs: pulumi.Input<inputs.machine.ConfigurationMachineSecretsCertsArgs>;
        /**
         * The cluster secrets
         */
        cluster: pulumi.Input<inputs.machine.ConfigurationMachineSecretsClusterArgs>;
        /**
         * The secrets for the talos kubernetes cluster
         */
        secrets: pulumi.Input<inputs.machine.ConfigurationMachineSecretsSecretsArgs>;
        /**
         * The trustd info for the talos kubernetes cluster
         */
        trustdinfo: pulumi.Input<inputs.machine.ConfigurationMachineSecretsTrustdinfoArgs>;
    }

    export interface ConfigurationMachineSecretsCerts {
        etcd: inputs.machine.ConfigurationMachineSecretsCertsEtcd;
        k8s: inputs.machine.ConfigurationMachineSecretsCertsK8s;
        k8sAggregator: inputs.machine.ConfigurationMachineSecretsCertsK8sAggregator;
        k8sServiceaccount: inputs.machine.ConfigurationMachineSecretsCertsK8sServiceaccount;
        os: inputs.machine.ConfigurationMachineSecretsCertsOs;
    }

    export interface ConfigurationMachineSecretsCertsArgs {
        etcd: pulumi.Input<inputs.machine.ConfigurationMachineSecretsCertsEtcdArgs>;
        k8s: pulumi.Input<inputs.machine.ConfigurationMachineSecretsCertsK8sArgs>;
        k8sAggregator: pulumi.Input<inputs.machine.ConfigurationMachineSecretsCertsK8sAggregatorArgs>;
        k8sServiceaccount: pulumi.Input<inputs.machine.ConfigurationMachineSecretsCertsK8sServiceaccountArgs>;
        os: pulumi.Input<inputs.machine.ConfigurationMachineSecretsCertsOsArgs>;
    }

    export interface ConfigurationMachineSecretsCertsEtcd {
        cert: string;
        key: string;
    }

    export interface ConfigurationMachineSecretsCertsEtcdArgs {
        cert: pulumi.Input<string>;
        key: pulumi.Input<string>;
    }

    export interface ConfigurationMachineSecretsCertsK8s {
        cert: string;
        key: string;
    }

    export interface ConfigurationMachineSecretsCertsK8sArgs {
        cert: pulumi.Input<string>;
        key: pulumi.Input<string>;
    }

    export interface ConfigurationMachineSecretsCertsK8sAggregator {
        cert: string;
        key: string;
    }

    export interface ConfigurationMachineSecretsCertsK8sAggregatorArgs {
        cert: pulumi.Input<string>;
        key: pulumi.Input<string>;
    }

    export interface ConfigurationMachineSecretsCertsK8sServiceaccount {
        key: string;
    }

    export interface ConfigurationMachineSecretsCertsK8sServiceaccountArgs {
        key: pulumi.Input<string>;
    }

    export interface ConfigurationMachineSecretsCertsOs {
        cert: string;
        key: string;
    }

    export interface ConfigurationMachineSecretsCertsOsArgs {
        cert: pulumi.Input<string>;
        key: pulumi.Input<string>;
    }

    export interface ConfigurationMachineSecretsCluster {
        /**
         * The ID of this resource.
         */
        id: string;
        secret: string;
    }

    export interface ConfigurationMachineSecretsClusterArgs {
        /**
         * The ID of this resource.
         */
        id: pulumi.Input<string>;
        secret: pulumi.Input<string>;
    }

    export interface ConfigurationMachineSecretsSecrets {
        aescbcEncryptionSecret?: string;
        bootstrapToken: string;
        secretboxEncryptionSecret: string;
    }

    export interface ConfigurationMachineSecretsSecretsArgs {
        aescbcEncryptionSecret?: pulumi.Input<string>;
        bootstrapToken: pulumi.Input<string>;
        secretboxEncryptionSecret: pulumi.Input<string>;
    }

    export interface ConfigurationMachineSecretsTrustdinfo {
        token: string;
    }

    export interface ConfigurationMachineSecretsTrustdinfoArgs {
        token: pulumi.Input<string>;
    }

    export interface SecretsClientConfiguration {
        /**
         * The client CA certificate
         */
        caCertificate?: pulumi.Input<string>;
        /**
         * The client certificate
         */
        clientCertificate?: pulumi.Input<string>;
        /**
         * The client key
         */
        clientKey?: pulumi.Input<string>;
    }

    export interface SecretsMachineSecrets {
        certs?: pulumi.Input<inputs.machine.SecretsMachineSecretsCerts>;
        /**
         * The cluster secrets
         */
        cluster?: pulumi.Input<inputs.machine.SecretsMachineSecretsCluster>;
        /**
         * kubernetes cluster secrets
         */
        secrets?: pulumi.Input<inputs.machine.SecretsMachineSecretsSecrets>;
        /**
         * trustd secrets
         */
        trustdinfo?: pulumi.Input<inputs.machine.SecretsMachineSecretsTrustdinfo>;
    }

    export interface SecretsMachineSecretsCerts {
        etcd?: pulumi.Input<inputs.machine.SecretsMachineSecretsCertsEtcd>;
        k8s?: pulumi.Input<inputs.machine.SecretsMachineSecretsCertsK8s>;
        k8sAggregator?: pulumi.Input<inputs.machine.SecretsMachineSecretsCertsK8sAggregator>;
        k8sServiceaccount?: pulumi.Input<inputs.machine.SecretsMachineSecretsCertsK8sServiceaccount>;
        os?: pulumi.Input<inputs.machine.SecretsMachineSecretsCertsOs>;
    }

    export interface SecretsMachineSecretsCertsEtcd {
        cert?: pulumi.Input<string>;
        key?: pulumi.Input<string>;
    }

    export interface SecretsMachineSecretsCertsK8s {
        cert?: pulumi.Input<string>;
        key?: pulumi.Input<string>;
    }

    export interface SecretsMachineSecretsCertsK8sAggregator {
        cert?: pulumi.Input<string>;
        key?: pulumi.Input<string>;
    }

    export interface SecretsMachineSecretsCertsK8sServiceaccount {
        key?: pulumi.Input<string>;
    }

    export interface SecretsMachineSecretsCertsOs {
        cert?: pulumi.Input<string>;
        key?: pulumi.Input<string>;
    }

    export interface SecretsMachineSecretsCluster {
        /**
         * The computed ID of the Talos cluster
         */
        id?: pulumi.Input<string>;
        secret?: pulumi.Input<string>;
    }

    export interface SecretsMachineSecretsSecrets {
        aescbcEncryptionSecret?: pulumi.Input<string>;
        bootstrapToken?: pulumi.Input<string>;
        secretboxEncryptionSecret?: pulumi.Input<string>;
    }

    export interface SecretsMachineSecretsTrustdinfo {
        token?: pulumi.Input<string>;
    }
}
