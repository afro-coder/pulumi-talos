// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace Pulumiverse.Talos.Machine.Outputs
{

    [OutputType]
    public sealed class SecretsMachineSecretsCerts
    {
        public readonly Outputs.SecretsMachineSecretsCertsEtcd? Etcd;
        public readonly Outputs.SecretsMachineSecretsCertsK8s? K8s;
        public readonly Outputs.SecretsMachineSecretsCertsK8sAggregator? K8sAggregator;
        public readonly Outputs.SecretsMachineSecretsCertsK8sServiceaccount? K8sServiceaccount;
        public readonly Outputs.SecretsMachineSecretsCertsOs? Os;

        [OutputConstructor]
        private SecretsMachineSecretsCerts(
            Outputs.SecretsMachineSecretsCertsEtcd? etcd,

            Outputs.SecretsMachineSecretsCertsK8s? k8s,

            Outputs.SecretsMachineSecretsCertsK8sAggregator? k8sAggregator,

            Outputs.SecretsMachineSecretsCertsK8sServiceaccount? k8sServiceaccount,

            Outputs.SecretsMachineSecretsCertsOs? os)
        {
            Etcd = etcd;
            K8s = k8s;
            K8sAggregator = k8sAggregator;
            K8sServiceaccount = k8sServiceaccount;
            Os = os;
        }
    }
}
