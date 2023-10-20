// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace Pulumiverse.Talos.Cluster.Outputs
{

    [OutputType]
    public sealed class KubeconfigKubernetesClientConfigurationResult
    {
        /// <summary>
        /// The kubernetes CA certificate
        /// </summary>
        public readonly string CaCertificate;
        /// <summary>
        /// The kubernetes client certificate
        /// </summary>
        public readonly string ClientCertificate;
        /// <summary>
        /// The kubernetes client key
        /// </summary>
        public readonly string ClientKey;
        /// <summary>
        /// The kubernetes host
        /// </summary>
        public readonly string Host;

        [OutputConstructor]
        private KubeconfigKubernetesClientConfigurationResult(
            string caCertificate,

            string clientCertificate,

            string clientKey,

            string host)
        {
            CaCertificate = caCertificate;
            ClientCertificate = clientCertificate;
            ClientKey = clientKey;
            Host = host;
        }
    }
}
