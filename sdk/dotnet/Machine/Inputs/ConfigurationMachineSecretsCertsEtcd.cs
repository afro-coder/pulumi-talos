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

    public sealed class ConfigurationMachineSecretsCertsEtcdArgs : global::Pulumi.InvokeArgs
    {
        [Input("cert", required: true)]
        public string Cert { get; set; } = null!;

        [Input("key", required: true)]
        private string? _key;
        public string? Key
        {
            get => _key;
            set => _key = value;
        }

        public ConfigurationMachineSecretsCertsEtcdArgs()
        {
        }
        public static new ConfigurationMachineSecretsCertsEtcdArgs Empty => new ConfigurationMachineSecretsCertsEtcdArgs();
    }
}
