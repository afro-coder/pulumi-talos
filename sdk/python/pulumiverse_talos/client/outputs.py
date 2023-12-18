# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from .. import _utilities

__all__ = [
    'ConfigurationClientConfigurationResult',
]

@pulumi.output_type
class ConfigurationClientConfigurationResult(dict):
    def __init__(__self__, *,
                 ca_certificate: str,
                 client_certificate: str,
                 client_key: str):
        """
        :param str ca_certificate: The client CA certificate
        :param str client_certificate: The client certificate
        :param str client_key: The client key
        """
        pulumi.set(__self__, "ca_certificate", ca_certificate)
        pulumi.set(__self__, "client_certificate", client_certificate)
        pulumi.set(__self__, "client_key", client_key)

    @property
    @pulumi.getter(name="caCertificate")
    def ca_certificate(self) -> str:
        """
        The client CA certificate
        """
        return pulumi.get(self, "ca_certificate")

    @property
    @pulumi.getter(name="clientCertificate")
    def client_certificate(self) -> str:
        """
        The client certificate
        """
        return pulumi.get(self, "client_certificate")

    @property
    @pulumi.getter(name="clientKey")
    def client_key(self) -> str:
        """
        The client key
        """
        return pulumi.get(self, "client_key")


