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

    public sealed class ConfigurationMachineSecretsTrustdinfoArgs : global::Pulumi.InvokeArgs
    {
        [Input("token", required: true)]
        private string? _token;
        public string? Token
        {
            get => _token;
            set => _token = value;
        }

        public ConfigurationMachineSecretsTrustdinfoArgs()
        {
        }
        public static new ConfigurationMachineSecretsTrustdinfoArgs Empty => new ConfigurationMachineSecretsTrustdinfoArgs();
    }
}
