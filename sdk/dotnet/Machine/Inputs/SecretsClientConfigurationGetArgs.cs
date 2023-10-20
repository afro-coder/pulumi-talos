// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace Pulumiverse.Talos.Machine.Inputs
{

    public sealed class SecretsClientConfigurationGetArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The client CA certificate
        /// </summary>
        [Input("caCertificate")]
        public Input<string>? CaCertificate { get; set; }

        /// <summary>
        /// The client certificate
        /// </summary>
        [Input("clientCertificate")]
        public Input<string>? ClientCertificate { get; set; }

        [Input("clientKey")]
        private Input<string>? _clientKey;

        /// <summary>
        /// The client key
        /// </summary>
        public Input<string>? ClientKey
        {
            get => _clientKey;
            set
            {
                var emptySecret = Output.CreateSecret(0);
                _clientKey = Output.Tuple<Input<string>?, int>(value, emptySecret).Apply(t => t.Item1);
            }
        }

        public SecretsClientConfigurationGetArgs()
        {
        }
        public static new SecretsClientConfigurationGetArgs Empty => new SecretsClientConfigurationGetArgs();
    }
}
