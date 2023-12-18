// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace Pulumiverse.Talos.Cluster.Inputs
{

    public sealed class HealthClientConfigurationArgs : global::Pulumi.InvokeArgs
    {
        /// <summary>
        /// The client CA certificate
        /// </summary>
        [Input("caCertificate", required: true)]
        public string CaCertificate { get; set; } = null!;

        /// <summary>
        /// The client certificate
        /// </summary>
        [Input("clientCertificate", required: true)]
        public string ClientCertificate { get; set; } = null!;

        [Input("clientKey", required: true)]
        private string? _clientKey;

        /// <summary>
        /// The client key
        /// </summary>
        public string? ClientKey
        {
            get => _clientKey;
            set => _clientKey = value;
        }

        public HealthClientConfigurationArgs()
        {
        }
        public static new HealthClientConfigurationArgs Empty => new HealthClientConfigurationArgs();
    }
}
