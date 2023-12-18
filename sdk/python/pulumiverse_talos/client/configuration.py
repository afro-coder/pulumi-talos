# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from .. import _utilities
from . import outputs
from ._inputs import *

__all__ = [
    'ConfigurationResult',
    'AwaitableConfigurationResult',
    'configuration',
    'configuration_output',
]

@pulumi.output_type
class ConfigurationResult:
    """
    A collection of values returned by Configuration.
    """
    def __init__(__self__, client_configuration=None, cluster_name=None, endpoints=None, id=None, nodes=None, talos_config=None):
        if client_configuration and not isinstance(client_configuration, dict):
            raise TypeError("Expected argument 'client_configuration' to be a dict")
        pulumi.set(__self__, "client_configuration", client_configuration)
        if cluster_name and not isinstance(cluster_name, str):
            raise TypeError("Expected argument 'cluster_name' to be a str")
        pulumi.set(__self__, "cluster_name", cluster_name)
        if endpoints and not isinstance(endpoints, list):
            raise TypeError("Expected argument 'endpoints' to be a list")
        pulumi.set(__self__, "endpoints", endpoints)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if nodes and not isinstance(nodes, list):
            raise TypeError("Expected argument 'nodes' to be a list")
        pulumi.set(__self__, "nodes", nodes)
        if talos_config and not isinstance(talos_config, str):
            raise TypeError("Expected argument 'talos_config' to be a str")
        pulumi.set(__self__, "talos_config", talos_config)

    @property
    @pulumi.getter(name="clientConfiguration")
    def client_configuration(self) -> 'outputs.ConfigurationClientConfigurationResult':
        """
        The client configuration data
        """
        return pulumi.get(self, "client_configuration")

    @property
    @pulumi.getter(name="clusterName")
    def cluster_name(self) -> str:
        """
        The name of the cluster in the generated config
        """
        return pulumi.get(self, "cluster_name")

    @property
    @pulumi.getter
    def endpoints(self) -> Optional[Sequence[str]]:
        """
        endpoints to set in the generated config
        """
        return pulumi.get(self, "endpoints")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The ID of this resource
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def nodes(self) -> Optional[Sequence[str]]:
        """
        nodes to set in the generated config
        """
        return pulumi.get(self, "nodes")

    @property
    @pulumi.getter(name="talosConfig")
    def talos_config(self) -> str:
        """
        The generated client configuration
        """
        return pulumi.get(self, "talos_config")


class AwaitableConfigurationResult(ConfigurationResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return ConfigurationResult(
            client_configuration=self.client_configuration,
            cluster_name=self.cluster_name,
            endpoints=self.endpoints,
            id=self.id,
            nodes=self.nodes,
            talos_config=self.talos_config)


def configuration(client_configuration: Optional[pulumi.InputType['ConfigurationClientConfigurationArgs']] = None,
                  cluster_name: Optional[str] = None,
                  endpoints: Optional[Sequence[str]] = None,
                  nodes: Optional[Sequence[str]] = None,
                  opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableConfigurationResult:
    """
    Generate client configuration for a Talos cluster

    ## Example Usage

    ```python
    import pulumi
    import pulumi_talos as talos
    import pulumiverse_talos as talos

    this_secrets = talos.machine.Secrets("thisSecrets")
    this_configuration = talos.client.configuration_output(cluster_name="example-cluster",
        client_configuration=this_secrets.client_configuration,
        nodes=["10.5.0.2"])
    ```


    :param pulumi.InputType['ConfigurationClientConfigurationArgs'] client_configuration: The client configuration data
    :param str cluster_name: The name of the cluster in the generated config
    :param Sequence[str] endpoints: endpoints to set in the generated config
    :param Sequence[str] nodes: nodes to set in the generated config
    """
    __args__ = dict()
    __args__['clientConfiguration'] = client_configuration
    __args__['clusterName'] = cluster_name
    __args__['endpoints'] = endpoints
    __args__['nodes'] = nodes
    opts = pulumi.InvokeOptions.merge(_utilities.get_invoke_opts_defaults(), opts)
    __ret__ = pulumi.runtime.invoke('talos:client/configuration:Configuration', __args__, opts=opts, typ=ConfigurationResult).value

    return AwaitableConfigurationResult(
        client_configuration=pulumi.get(__ret__, 'client_configuration'),
        cluster_name=pulumi.get(__ret__, 'cluster_name'),
        endpoints=pulumi.get(__ret__, 'endpoints'),
        id=pulumi.get(__ret__, 'id'),
        nodes=pulumi.get(__ret__, 'nodes'),
        talos_config=pulumi.get(__ret__, 'talos_config'))


@_utilities.lift_output_func(configuration)
def configuration_output(client_configuration: Optional[pulumi.Input[pulumi.InputType['ConfigurationClientConfigurationArgs']]] = None,
                         cluster_name: Optional[pulumi.Input[str]] = None,
                         endpoints: Optional[pulumi.Input[Optional[Sequence[str]]]] = None,
                         nodes: Optional[pulumi.Input[Optional[Sequence[str]]]] = None,
                         opts: Optional[pulumi.InvokeOptions] = None) -> pulumi.Output[ConfigurationResult]:
    """
    Generate client configuration for a Talos cluster

    ## Example Usage

    ```python
    import pulumi
    import pulumi_talos as talos
    import pulumiverse_talos as talos

    this_secrets = talos.machine.Secrets("thisSecrets")
    this_configuration = talos.client.configuration_output(cluster_name="example-cluster",
        client_configuration=this_secrets.client_configuration,
        nodes=["10.5.0.2"])
    ```


    :param pulumi.InputType['ConfigurationClientConfigurationArgs'] client_configuration: The client configuration data
    :param str cluster_name: The name of the cluster in the generated config
    :param Sequence[str] endpoints: endpoints to set in the generated config
    :param Sequence[str] nodes: nodes to set in the generated config
    """
    ...
